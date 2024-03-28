import { Repository } from 'typeorm';
import { OrderModel } from '../../../model/order/orderModel';
import { OrderDto } from '../../../DTOs/orderDto/OrderDto';
import { UserModal } from '../../../model';
import { OrderItemModel } from '../../../model/orderItem/orderItemModel ';

export class OrderService {
  constructor(
    private orderRepository: Repository<OrderModel>,
    private userRepository: Repository<UserModal>,
    private orderItemRepository: Repository<OrderItemModel>
  ) { }


  async create(data: OrderDto) {
    try {
      const currentDate = new Date();
      currentDate.setHours(currentDate.getHours() - 3);

      const user = await this.userRepository.findOne({
        where: { id: data.userId }
      });

      if (!user) {
        throw new Error(`User with ID ${data.userId} not found`);
      }

      const orderItems = data.orderItem.map(itemData => {
        const orderItem = this.orderItemRepository.create({
          productId: itemData.product,
          quantity: itemData.quantity
        
        });
        return orderItem;

      });

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