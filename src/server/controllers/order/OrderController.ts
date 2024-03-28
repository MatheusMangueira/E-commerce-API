import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { OrderDto } from '../../DTOs/orderDto/OrderDto';
import { ValidatorMiddleware } from '../../shared/middleware';
import { orderItemServiceInstance, orderServiceInstance } from '../../shared/factory';

export class OrderController {

  static validation = ValidatorMiddleware.validator({
    schema: OrderDto,
    fieldsToValidate: ['body']
  });


  static async create(req: Request<{}, {}, OrderDto>, res: Response) {
    try {
      const newOrder = await orderServiceInstance.create(req.body);

      return res
        .status(StatusCodes.CREATED)
        .json({ message: 'Order created', order: newOrder });


    } catch (error) {
      console.log(error, 'erro no controller, post()');

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Sesrver Error' });
    }
  }
}