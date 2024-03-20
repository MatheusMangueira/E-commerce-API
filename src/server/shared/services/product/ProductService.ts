import { FindManyOptions, Repository } from 'typeorm';
import { ProductModel } from '../../../model';

export class ProductService {
  constructor(private productRepository: Repository<ProductModel>) { }

  async create(product: Omit<ProductModel, 'id'>) {
    console.log(product.name, 'console do service, post()');


    const createProduct = this.productRepository.create(product);

    return await this.productRepository.save(createProduct);
  }

  async getAll(page: number = 1, limit: number = 10): Promise<ProductModel[]> {
    try {
      const skip = (page - 1) * limit;

      const options: FindManyOptions<ProductModel> = {
        skip,
        take: limit
      };

      const products = await this.productRepository.find(options);

      return products;

    } catch (error) {
      console.log(error, 'erro no service, getAll()');
      throw new Error('Internal Server Error');
    }
  }


  async getById(id: string): Promise<ProductModel> {
    try {
      const product: FindManyOptions<ProductModel> = {
        where: { id }
      };

      const productById = await this.productRepository.findOne(product);

      if (!productById) {
        throw new Error('Product not found');
      }

      return productById;

    } catch (error) {
      console.log(error, 'erro no service, getById()');
      throw new Error('Internal Server Error');
    }
  }

  async update(id: string, product: ProductModel) {
    try {

      const productId: FindManyOptions<ProductModel> = {
        where: { id }
      };

      const productToUpdate = await this.productRepository.findOne(productId);

      if (!productToUpdate) {
        throw new Error('Product not found');
      }

      const updatedProduct = await this.productRepository.save({
        ...productToUpdate,
        ...product
      });

      return updatedProduct;

    } catch (error) {
      console.log(error, 'erro no service, update()');
      throw new Error('Internal Server Error');
    }
  }

  async delete(id: string) {
    try {
      const productId: FindManyOptions<ProductModel> = {
        where: { id }
      };

      const productToDelete = await this.productRepository.findOne(productId);

      if (!productToDelete) {
        throw new Error('Product not found');
      }

      await this.productRepository.delete(id);

      return { message: 'Product deleted' };

    } catch (error) {
      console.log(error, 'erro no service, delete()');
      throw new Error('Internal Server Error');
    }
  }

}