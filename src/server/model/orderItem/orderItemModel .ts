import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ProductModel } from '../product/productModel';
import { OrderModel } from '../order/orderModel';

@Entity('orderItem')
export class OrderItemModel {

  @PrimaryGeneratedColumn('uuid')
    id: string;

  @ManyToOne(type => ProductModel, product => product.orderItems)
    product: ProductModel;

  @ManyToOne(type => OrderModel, order => order.orderItem)
    order: OrderModel;

  @Column()
    quantity: number;

}