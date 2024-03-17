import { AppDataSource } from '../../config/database';
import { ProductModel } from '../../model';
import { ProductService } from '../services/product/creteService';


export const createService = new ProductService(
  AppDataSource.getRepository(ProductModel)
);

