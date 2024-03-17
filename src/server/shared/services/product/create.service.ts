import { Repository } from "typeorm";
import { ProductModel } from "../../../model";

class ProductService {
    constructor(private productRepository: Repository<ProductModel>) {}

    async create(product: Omit<ProductModel, "id">) {
        console.log(product, "create product service");

        // regras de negocio de negócio

        // categoria. thowr error
        // nome. cateogra não existe. throw error

        // validar
        const createProduct = this.productRepository.create(product);

        return await this.productRepository.save(createProduct);
    }
}

export default ProductService;
