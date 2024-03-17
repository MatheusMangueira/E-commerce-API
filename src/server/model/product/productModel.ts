import { IsInt, IsNotEmpty, Min, MinLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("product")
@Unique(["name"])
export class ProductModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty({ message: "O nome do produto é obrigatório" })
    @MinLength(3, {
        message: "O nome do produto deve ter no mínimo 3 caracteres",
    })
    name: string;

    @Column("int")
    @IsInt({ message: "O estoque deve ser um número inteiro" })
    @Min(0, { message: "O estoque não pode ser negativo" })
    stock: number;

    @Column("decimal")
    @IsNotEmpty({ message: "O preço do produto é obrigatório" })
    price: number;

    @Column()
    @IsNotEmpty({ message: "A descrição do produto é obrigatória" })
    @MinLength(5, {
        message: "A descrição do produto deve ter no mínimo 5 caracteres",
    })
    description: string;

    @Column()
    @IsNotEmpty({ message: "A imagem do produto é obrigatória" })
    productImage: string;
}
