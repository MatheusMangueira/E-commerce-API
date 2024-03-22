import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { CreateDateColumn } from 'typeorm';

export class UserDto {
  @IsOptional()
  @IsString()
    id?: string;

  @IsString()
  @IsNotEmpty({ message: 'O nome do usuário é obrigatório' })
  @MinLength(3, { message: 'O nome do usuário deve ter no mínimo 3 caracteres' })
    fullName: string;

  @IsString()
  @IsNotEmpty({ message: 'O email do usuário é obrigatório' })
  @IsEmail({}, { message: 'O email informado é inválido' })
    email: string;

    @IsDate()
    @IsOptional()
      createdAt?: Date;
}