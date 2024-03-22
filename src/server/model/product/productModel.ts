import { IsNotEmpty, MinLength, IsInt, Min } from 'class-validator';
import { Entity, Column, Unique, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CategoryModel } from '../category/categoryModel';

@Entity('product')
@Unique(['name'])
export class ProductModel {
  @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => CategoryModel, category => category.product)
    @JoinColumn({ name: 'category_id' })
      category: CategoryModel;
    

  @Column()
  @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
  @MinLength(3, { message: 'O nome do produto deve ter no mínimo 3 caracteres' })
    name: string;

  @Column('int')
  @IsInt({ message: 'O estoque deve ser um número inteiro' })
  @Min(0, { message: 'O estoque não pode ser negativo' })
    stock: number;

  @Column('decimal')
  @IsNotEmpty({ message: 'O preço do produto é obrigatório' })
    price: number;

  @Column()
  @IsNotEmpty({ message: 'A descrição do produto é obrigatória' })
  @MinLength(5, { message: 'A descrição do produto deve ter no mínimo 5 caracteres' })
    description: string;

  @Column()
  @IsNotEmpty({ message: 'A imagem do produto é obrigatória' })
    productImage: string;

}
