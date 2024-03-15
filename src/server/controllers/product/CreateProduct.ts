import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


type Product = {
  name: string;
  stock: number;
  price: number;
  description: string;
  productImage: string;
}


export const createProduct = async (req: Request<{}, {}, Product>, res: Response) => {

  console.log('Creating product', req.body);

  return res.status(StatusCodes.CREATED).json({ message: 'Product created' });
};