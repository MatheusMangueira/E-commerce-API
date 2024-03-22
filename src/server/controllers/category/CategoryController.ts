import { Request, Response } from 'express';
import { categoryServiceInstance, productServiceInstance } from '../../shared/factory';
import { CategoryDto } from '../../DTOs';
import { ValidatorMiddleware } from '../../shared/middleware';


type Pagination = {
  page: string;
  limit: string;
}

export class CategoryController {

  static validation = ValidatorMiddleware.validator({
    schema: CategoryDto,
    fieldsToValidate: ['body']
  });


  static async create(req: Request<{}, {}, CategoryDto>, res: Response) {
    console.log('create category');
    try {
      const newCategory = await categoryServiceInstance.create(req.body);
      return res
        .status(201)
        .json({ message: 'Category created', category: newCategory });


    } catch (error) {
      console.log(error, 'erro no controller, post()');

      return res
        .status(500)
        .json({ message: 'Internal Server Error' });
    }

  }

  static async getAll(req: Request<{}, {}, {}, Pagination>, res: Response) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const categories = await categoryServiceInstance.getAll(page, limit);
      
      return res
        .status(200)
        .json({ message: 'Categories found', category: categories });

    } catch (error) {
      console.log(error, 'erro no controller, getAll()');

      return res
        .status(500)
        .json({ message: 'Internal Server Error' });
    }
  }

}