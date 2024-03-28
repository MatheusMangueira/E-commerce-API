import { DataSource } from 'typeorm';
import { ProductModel, CategoryModel, UserModal } from '../../model';
import 'dotenv/config';
import { OrderModel } from '../../model/order/orderModel';
import { OrderItemModel } from '../../model/orderItem/orderItemModel ';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: [ProductModel, CategoryModel, UserModal, OrderModel, OrderItemModel],
});

