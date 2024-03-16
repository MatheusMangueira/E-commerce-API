import { Router } from 'express';
import { ProductController } from '../controllers';



export class AllRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post('/produtos', ProductController.validation, ProductController.create);
  }


  public getRouter() {
    return this.router;
  }
}