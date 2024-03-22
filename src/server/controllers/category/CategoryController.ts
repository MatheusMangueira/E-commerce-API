import { Request, Response } from 'express';
import { categoryServiceInstance, productServiceInstance } from '../../shared/factory';
import { ProductModel } from '../../model';

type category = {
  name: string;
}

export class CategoryController {
  static async create(req: Request<{}, {}, category>, res: Response) {
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