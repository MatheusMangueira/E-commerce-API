import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { OrderDto } from '../orderDto/OrderDto';
import { ProductDto } from '../productDto/ProductDto';

export class OrderItemDto {

  @IsNotEmpty({
    message: 'Product ID is required'
  })
  @IsString()
    product: ProductDto;

  @IsNotEmpty({
    message: 'Order ID is required'
  })
  @IsString()
    order: OrderDto;

  @IsNumber()
  @IsNotEmpty({
    message: 'Quantity is required'
  })
    quantity: number;
}