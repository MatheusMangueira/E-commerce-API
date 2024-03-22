import { Repository } from 'typeorm';
import { CategoryDto } from '../../../DTOs';
import { CategoryModel } from '../../../model/category/categoryModel';

export class CategoryService {
  constructor(private categoryRepository: Repository<CategoryModel>) { }

  async create(category: CategoryDto) {

    const createCategory = this.categoryRepository.create({
      ...category
    });

    const repository = await this.categoryRepository.save(createCategory);

    return repository;
  }

  async getAll(page: number = 1, limit: number = 10): Promise<CategoryDto[]> {
    try {

      const skip = (page - 1) * limit;

      const categories = await this.categoryRepository.find({
        skip,
        take: limit,
      });

      return categories;

    } catch (error) {
      console.log(error, 'erro no service, getAll()');
      throw new Error('Internal Server Error');
    }
  }
}