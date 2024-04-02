import { Repository } from 'typeorm';
import { OrderModel } from '../../../model/order/orderModel';
import { OrderDto } from '../../../DTOs/orderDto/OrderDto';
import { ProductModel, UserModal } from '../../../model';
import { OrderItemModel } from '../../../model/orderItem/orderItemModel ';

export class OrderService {
  constructor(
    private orderRepository: Repository<OrderModel>,
    private userRepository: Repository<UserModal>,
    private orderItemRepository: Repository<OrderItemModel>,
    private productRepository: Repository<ProductModel>
  ) { }


  async create(data: OrderDto) {
    try {
      const currentDate = new Date();
      // currentDate.setHours(currentDate.getHours() - 3);

      const user = await this.userRepository.findOne({
        where: { id: data.userId }
      });

      if (!user) {
        throw new Error(`User with ID ${data.userId} not found`);
      }

      const orderItems = await Promise.all(data.orderItem.map(async itemData => {
        const product = await this.productRepository.findOne({
          where: { id: itemData.product.id }
        });

        if (!product) {
          throw new Error(`Product with ID ${itemData.product.id} not found`);
        }

        if (product.stock < itemData.quantity) {
          throw new Error(`Product with ID ${itemData.product.id} out of stock`);
        }

        product.stock -= itemData.quantity;
        await this.productRepository.save(product);

        const orderItem = this.orderItemRepository.create({
          product: itemData.product,
          quantity: itemData.quantity
        });

        return orderItem;
      }));

      const createdOrderItems = await this.orderItemRepository.save(orderItems);

      const order = this.orderRepository.create({
        orderDate: currentDate,
        user: user,
        orderItem: createdOrderItems
      });

      const createdOrder = await this.orderRepository.save(order);

      return createdOrder;

    } catch (error) {
      console.log(error, 'erro no service, create()');
      throw new Error('Internal Server Error');
    }

  }

}