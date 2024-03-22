import { AppDataSource } from '../../config/database';
import { ProductModel } from '../../model';
import { CategoryModel } from '../../model/category/categoryModel';
import { CategoryService } from '../services/category/CategoryService';
import { ProductService } from '../services/product/ProductService';


export const productServiceInstance = new ProductService(
  AppDataSource.getRepository(ProductModel)
);

export const categoryServiceInstance = new CategoryService(
  AppDataSource.getRepository(CategoryModel)
);
