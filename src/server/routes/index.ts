import { Router } from 'express';
import { ProductController } from '../controllers/product';


const router = Router();


router.post('/produtos', ProductController.createProduct);

export { router };