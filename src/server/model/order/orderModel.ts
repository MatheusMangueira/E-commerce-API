import { CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { UserModal } from '../user/userModel';
import { OrderItemModel } from '../orderItem/orderItemModel ';
import { IsNotEmpty, IsObject } from 'class-validator';


@Entity('order')
export class OrderModel {

  @PrimaryGeneratedColumn('uuid')
    id?: string;

  @CreateDateColumn()
    orderDate: Date;

  @ManyToOne(type => UserModal, user => user.id)
    user: UserModal;


  @OneToMany(type => OrderItemModel, orderItem => orderItem.order)
    orderItem: OrderItemModel[];

}