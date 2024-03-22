import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserDto } from '../../DTOs';
import { ValidatorMiddleware } from '../../shared/middleware';
import { userServiceInstance } from '../../shared/factory';

type Pagination = {
  page: string;
  limit: string;
}

export class UserController {

  static validation = ValidatorMiddleware.validator({
    schema: UserDto,
    fieldsToValidate: ['body']
  });

  static async create(req: Request<{}, {}, UserDto>, res: Response) {
    try {
      const newUser = await userServiceInstance.create(req.body);

      return res
        .status(StatusCodes.CREATED)
        .json({ message: 'User created', user: newUser });

    } catch (error) {
      console.log(error, 'erro no controller, post()');

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }
  }

  static async getAll(req: Request<{}, {}, {}, Pagination>, res: Response) {

    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const users = await userServiceInstance.getAll(page, limit);

      return res
        .status(StatusCodes.OK)
        .json({ message: 'Users found', user: users });

    } catch (error) {
      console.log(error, 'erro no controller, getAll()');

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }

  }


}