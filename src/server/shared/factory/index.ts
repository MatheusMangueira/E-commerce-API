import { AppDataSource } from '../../config/database';
import { ProductModel, UserModal, CategoryModel } from '../../model';
import { ProductService, CategoryService, UserService } from '../services';



export const productServiceInstance = new ProductService(
  AppDataSource.getRepository(ProductModel)
);

export const categoryServiceInstance = new CategoryService(
  AppDataSource.getRepository(CategoryModel)
);

export const userServiceInstance = new UserService(
  AppDataSource.getRepository(UserModal)
);
