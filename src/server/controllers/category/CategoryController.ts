import { Request, Response } from 'express';
import { categoryServiceInstance, productServiceInstance } from '../../shared/factory';
import { CategoryDto } from '../../DTOs';
import { ValidatorMiddleware } from '../../shared/middleware';


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

}