import { IsNotEmpty, MinLength } from 'class-validator';
import { Entity, Column, Unique, PrimaryColumn, OneToMany, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ProductModel } from '../product/productModel';


@Entity('category')
@Unique(['name'])
export class CategoryModel {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @OneToMany(type => ProductModel, product => product.category)
    product: ProductModel[];


}