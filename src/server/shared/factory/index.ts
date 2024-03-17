import myDataSource from "../../config/database";
import { ProductModel } from "../../model";
import ProductService from "../services/product/create.service";

export const createService = new ProductService(
    myDataSource.getRepository(ProductModel)
);
