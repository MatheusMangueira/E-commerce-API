import { Router } from 'express';
import { ProductController } from '../controllers';
import { CategoryController } from '../controllers/category/CategoryController';

export class AllRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private productRoutes() {
    this.router.post('/produtos', ProductController.validation, ProductController.create);
    this.router.get('/produtos', ProductController.getAll);
    this.router.get('/produtos/:id', ProductController.getById);
    this.router.put('/produtos/:id', ProductController.validation, ProductController.update);
    this.router.delete('/produtos/:id', ProductController.delete);
  }

  private categoryRoutes() {
    this.router.post('/categorias', CategoryController.validation, CategoryController.create);
    this.router.get('/categorias', CategoryController.getAll);
  }

  private setupRoutes() {
    this.productRoutes();
    this.categoryRoutes();
  }


  public getRouter() {
    return this.router;
  }
}