import { Request, Response } from 'express';

import { OrderItemDto } from '../../DTOs/orderItemDto/OrderItemDto';
import { ValidatorMiddleware } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';
import { orderItemServiceInstance } from '../../shared/factory';

export class OrderItemController {
  static validation = ValidatorMiddleware.validator({
    schema: OrderItemDto,
    fieldsToValidate: ['body']
  });


  static async create(req: Request<{}, {}, OrderItemDto>, res: Response) {
    try {
      const newOrderItem = await orderItemServiceInstance.create(req.body);

      return res
        .status(StatusCodes.CREATED)
        .json({ message: 'OrderItem created', orderItem: newOrderItem });

    } catch (error) {
      console.log(error, 'erro no controller, post()');

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Sesrver Error' });
    }

  }

}