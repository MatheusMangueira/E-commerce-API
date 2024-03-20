import { AppDataSource } from '../../config/database';
import { ProductModel } from '../../model';
import { ProductService } from '../services/product/ProductService';


export const productServiceInstance = new ProductService(
  AppDataSource.getRepository(ProductModel)
);

