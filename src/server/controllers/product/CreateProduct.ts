import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ProductModel } from "../../model";
import { createService } from "../../shared/factory";
import { ValidatorMiddleware } from "../../shared/middleware";

type Product = {
    name: string;
    stock: number;
    price: number;
    description: string;
    productImage: string;
};

export class ProductController {
    static validation = ValidatorMiddleware.validator({
        schema: ProductModel,
        fieldsToValidate: ["body"],
    });

    static async create(req: Request<{}, {}, Product>, res: Response) {
        try {
            const newProduct = await createService.create(req.body);
            return res
                .status(StatusCodes.CREATED)
                .json({ message: "Product created", product: newProduct });
        } catch (error) {
            console.log(error);

            return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ message: "Internal Server Error" });
        }
    }
}
