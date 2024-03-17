import 'reflect-metadata';
import express, { Application } from 'express';
import { AllRouter } from './routes';
import 'dotenv/config';

export class Server {
  private app: Application;
  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(express.json());
    const productRouter = new AllRouter().getRouter();
    this.app.use(productRouter);
  }

  listen(port: number) {
    this.app.listen(port, () => { });
  }

}


