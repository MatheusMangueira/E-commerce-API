import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ValidatorMiddleware } from '../../shared/middleware';
import { productServiceInstance } from '../../shared/factory';
import { ProductDto } from '../../DTOs/index';


type Pagination = {
  page: string;
  limit: string;

}

export class ProductController {
  static validation = ValidatorMiddleware.validator({
    schema: ProductDto,
    fieldsToValidate: ['body']
  });

  static async create(req: Request<{}, {}, ProductDto>, res: Response) {
    try {
      const newProduct = await productServiceInstance.create(req.body);
      return res
        .status(StatusCodes.CREATED)
        .json({ message: 'Product created', product: newProduct });
    } catch (error) {
      console.log(error, 'erro no controller, post()');

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Sesrver Error' });
    }
  }

  static async getAll(req: Request<{}, {}, {}, Pagination>, res: Response) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const products = await productServiceInstance.getAll(page, limit);

      return res
        .status(StatusCodes.OK)
        .json(products);
    } catch (error) {
      console.log(error, 'erro no controller, get()');

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const product = await productServiceInstance.getById(id);

      return res
        .status(StatusCodes.OK)
        .json(product);

    } catch (error) {
      console.log(error, 'erro no controller, getById()');

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }

  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = req.body;

      const updatedProduct = await productServiceInstance.update(id, product);

      return res
        .status(StatusCodes.OK)
        .json(updatedProduct);

    } catch (error) {
      console.log(error, 'erro no controller, update()');

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      await productServiceInstance.delete(id);

      return res
        .status(StatusCodes.NO_CONTENT)
        .json({ message: 'Product deleted' });

    } catch (error) {
      console.log(error, 'erro no controller, delete()');

      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }
  }


}
