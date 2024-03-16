import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { plainToInstance } from 'class-transformer';

interface RequestData {
  body?: any;
  params?: any;
  query?: any;
}

type ValidateProps = {
  schema: any;
  fieldsToValidate: ('body' | 'params' | 'query')[];
}


export class ValidatorMiddleware {
  static validator({ schema, fieldsToValidate }: ValidateProps) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const requestData: RequestData = {
          body: req.body,
          params: req.params,
          query: req.query
        };

        const errors: ValidationError[] = [];

        const fields = fieldsToValidate || ['body', 'params', 'query'];

        const validationPromises = fields.map(async (field) => {
          const data = requestData[field];
          if (data) {
            const instance = plainToInstance(schema, data);
            return validate(instance);
          }
          return [];
        });

        const validationResults = await Promise.all(validationPromises);

        validationResults.forEach((validationErrors) => {
          errors.push(...validationErrors);
        });

        if (errors.length > 0) {
          return res.status(StatusCodes.BAD_REQUEST).json({ errors });
        }

        next();
      } catch (error) {
        console.error('Erro durante a validação:', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro durante a validação' });
      }
    };
  }

}

