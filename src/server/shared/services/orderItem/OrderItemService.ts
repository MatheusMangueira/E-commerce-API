import { Repository } from 'typeorm';
import { OrderItemDto } from '../../../DTOs/orderItemDto/OrderItemDto';
import { OrderItemModel } from '../../../model/orderItem/orderItemModel ';
import { OrderModel, ProductModel } from '../../../model';

export class OrderItemService {
  constructor(
    private orderItemRepository: Repository<OrderItemModel>,
    private orderRepository: Repository<OrderModel>,
    private productRepository: Repository<ProductModel>
  ) { }

  async create(data: OrderItemDto) {

    try {
      const product = await this.productRepository.findOne({
        where: { id: data.product.id }
      });

      if (!product) {
        throw new Error(`Product with ID ${data.product.id} not found`);
      }

      const order = await this.orderRepository.findOne({
        where: { id: data.order.id }
      });

      if (!order) {
        throw new Error(`Order with ID ${data.order.id} not found`);
      }

      const orderItem = this.orderItemRepository.create({
        product: product,
        order: order,
        quantity: data.quantity
      });

      const createOrderItem = await this.orderItemRepository.save(orderItem);

      return createOrderItem;

    } catch (error) {
      console.log(error, 'erro no service, create()');
      throw new Error('Internal Server Error');
    }



  }


}