import { AppDataSource } from '../../config/database';
import { ProductModel, UserModal, CategoryModel } from '../../model';
import { OrderModel } from '../../model/order/orderModel';
import { OrderItemModel } from '../../model/orderItem/orderItemModel ';
import { ProductService, CategoryService, UserService, OrderItemService } from '../services';
import { OrderService } from '../services/order/OrderService';



export const productServiceInstance = new ProductService(
  AppDataSource.getRepository(ProductModel)
);

export const categoryServiceInstance = new CategoryService(
  AppDataSource.getRepository(CategoryModel)
);

export const userServiceInstance = new UserService(
  AppDataSource.getRepository(UserModal),
);

export const orderServiceInstance = new OrderService(
  AppDataSource.getRepository(OrderModel),
  AppDataSource.getRepository(UserModal),
  AppDataSource.getRepository(OrderItemModel),
);

export const orderItemServiceInstance = new OrderItemService(
  AppDataSource.getRepository(OrderItemModel),
  AppDataSource.getRepository(OrderModel),
  AppDataSource.getRepository(ProductModel),
);