import express, { Application } from "express";
import "reflect-metadata";
import { AllRouter } from "./routes";

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
        this.app.listen(port, () => {});
    }
}
