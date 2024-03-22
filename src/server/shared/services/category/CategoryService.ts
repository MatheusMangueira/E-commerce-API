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
}