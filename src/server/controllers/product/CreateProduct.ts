import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidatorMiddleware } from '../../shared/middleware';
import { ProductModel } from '../../model';

type Product = {
  name: string;
  stock: number;
  price: number;
  description: string;
  productImage: string;
}

export class ProductController {
  static validation = ValidatorMiddleware.validator({
    schema: ProductModel,
    fieldsToValidate: ['body']
  });

  static async create(req: Request<{}, {}, Product>, res: Response) {
    try {
      const newProduct = new ProductModel();
      newProduct.name = req.body.name;
      newProduct.stock = req.body.stock;
      newProduct.price = req.body.price;
      newProduct.description = req.body.description;
      newProduct.productImage = req.body.productImage;

      return res.status(StatusCodes.CREATED).json({ message: 'Product created', product: newProduct });
    } catch (error) {

      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
  }


}



