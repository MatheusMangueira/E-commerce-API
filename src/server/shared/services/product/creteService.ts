import { Repository } from 'typeorm';
import { ProductModel } from '../../../model';

export class ProductService {
  constructor(private productRepository: Repository<ProductModel>) { }

  async create(product: Omit<ProductModel, 'id'>) {
    console.log(product.name, 'console do service');


    const createProduct = this.productRepository.create(product);

    return await this.productRepository.save(createProduct);
  }

}