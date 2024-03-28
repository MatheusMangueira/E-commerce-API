import { IsDate, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { OrderItemDto } from '../orderItemDto/OrderItemDto';


export class OrderDto {

  @IsOptional()
  @IsString()
    id?: string;

  @IsDate()
  @IsOptional()
    orderDate: Date;

  @IsNotEmpty({
    message: 'User ID is required'
  })
  @IsString()
    userId: string;

  @IsNotEmpty({
    message: 'Order item is required'
  })
    orderItem: OrderItemDto[];
}