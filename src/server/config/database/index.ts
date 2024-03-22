import { DataSource } from 'typeorm';
import { ProductModel, CategoryModel, UserModal } from '../../model';
import 'dotenv/config';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: [ProductModel, CategoryModel, UserModal],
});

