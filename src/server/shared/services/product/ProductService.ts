import { FindManyOptions, Repository } from 'typeorm';
import { ProductDto } from '../../../DTOs';
import { ProductModel } from '../../../model';

export class ProductService {
  constructor(private productRepository: Repository<ProductModel>) { }

  async create(product: ProductDto) {
    console.log(product.name, 'console do service, post()');

    const category = product.category;

    if (!category) {
      throw new Error('Category is required');
    }

    const createProduct = this.productRepository.create({
      ...product,
      category
    });
    return await this.productRepository.save(createProduct);
  }

  async getAll(page: number = 1, limit: number = 10): Promise<ProductDto[]> {
    try {
      const skip = (page - 1) * limit;

      const products = await this.productRepository.find({
        skip,
        take: limit
      });

      return products;

    } catch (error) {
      console.log(error, 'erro no service, getAll()');
      throw new Error('Internal Server Error');
    }
  }


  async getById(id: string): Promise<ProductDto> {
    try {

      const productById = await this.productRepository.findOne({
        where: { id }
      });

      if (!productById) {
        throw new Error('Product not found');
      }

      return productById;

    } catch (error) {
      console.log(error, 'erro no service, getById()');
      throw new Error('Internal Server Error');
    }
  }

  async update(id: string, data: ProductDto) {
    try {

      const product = await this.productRepository.findOne({
        where: { id }
      });

      if (!product) {
        throw new Error('Product not found');
      }

      const updatedProduct = await this.productRepository.save({
        ...product,
        ...data
      });

      return updatedProduct;

    } catch (error) {
      console.log(error, 'erro no service, update()');
      throw new Error('Internal Server Error');
    }
  }

  async delete(id: string) {
    try {
      const productToDelete = await this.productRepository.findOne({
        where: { id }
      });

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