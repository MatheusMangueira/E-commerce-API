import { IsInt, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, Min, MinLength, isEmpty, isString } from 'class-validator';


export class ProductDto {

  @IsOptional()
  @IsString()
    id?: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome do produto é obrigatório' })
  @MinLength(3, { message: 'O nome do produto deve ter no mínimo 3 caracteres' })
  public name: string;

  @IsNumber()
  @IsInt({ message: 'O estoque deve ser um número inteiro' })
  @Min(0, { message: 'O estoque não pode ser negativo' })
  public stock: number;

  @IsNumber()
  @IsNotEmpty({ message: 'O preço do produto é obrigatório' })
  public price: number;

  @IsString()
  @IsNotEmpty({ message: 'A descrição do produto é obrigatória' })
  @MinLength(5, { message: 'A descrição do produto deve ter no mínimo 5 caracteres' })
  public description: string;

  @IsString()
  @IsNotEmpty({ message: 'A imagem do produto é obrigatória' })
  public productImage: string;

  @IsObject()
  @IsNotEmpty({ message: 'A categoria do produto é obrigatória' })
  public category: {
    id: string;
  };




}