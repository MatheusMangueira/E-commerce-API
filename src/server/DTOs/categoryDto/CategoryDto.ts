import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';


export class CategoryDto {

  @IsOptional()
  @IsString()
  public id?: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome da categoria é obrigatório' })
  @MinLength(3, { message: 'O nome da categoria deve ter no mínimo 3 caracteres' })
  public name: string;

}