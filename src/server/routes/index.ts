import { Router } from 'express';
import { OrderController, ProductController } from '../controllers';
import { CategoryController } from '../controllers/category/CategoryController';
import { UserController } from '../controllers/user/UserController';

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
    this.router.put('/produtos/:id', ProductController.update);
    this.router.delete('/produtos/:id', ProductController.delete);
  }

  private categoryRoutes() {
    this.router.post('/categorias', CategoryController.validation, CategoryController.create);
    this.router.get('/categorias', CategoryController.getAll);
    this.router.get('/categorias/:id', CategoryController.getById);
    this.router.delete('/categorias/:id', CategoryController.delete);
    this.router.put('/categorias/:id', CategoryController.validation, CategoryController.update);
  }

  private userRoutes() {
    this.router.post('/usuario', UserController.validation, UserController.create);
    this.router.get('/usuario', UserController.getAll);
    this.router.delete('/usuario/:id', UserController.delete);
  }

  private orderRoutes() {
    this.router.post('/pedido', OrderController.validation, OrderController.create);
  }

  private setupRoutes() {
    this.productRoutes();
    this.categoryRoutes();
    this.userRoutes();
    this.orderRoutes();
  }


  public getRouter() {
    return this.router;
  }
}