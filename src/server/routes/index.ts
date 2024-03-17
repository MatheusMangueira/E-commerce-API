import { Router } from 'express';
import { ProductController } from '../controllers';

export class AllRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private productRoutes() {
    this.router.post(
      '/produtos',
      ProductController.validation,
      ProductController.create
    );
  }

  private setupRoutes() {
    this.productRoutes();
  }


  public getRouter() {
    return this.router;
  }
}