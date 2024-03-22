import { DataSource } from 'typeorm';
import { ProductModel } from '../../model';
import 'dotenv/config';
import { CategoryModel } from '../../model/category/categoryModel';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: [ProductModel, CategoryModel], 
});

