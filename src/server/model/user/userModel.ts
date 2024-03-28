import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { OrderModel } from '../order/orderModel';


@Entity('user')
@Unique(['email'])
export class UserModal {

  @PrimaryGeneratedColumn('uuid')
    id?: string;

  @Column()
    fullName: string;

  @Column()
    email: string;

  @CreateDateColumn()
    createdAt: Date;

}