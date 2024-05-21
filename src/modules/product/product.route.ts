import express from 'express';
import { productControllers } from './product.controller';
const router = express.Router();

router.get('/', productControllers.getAllProducts);
router.post('/', productControllers.addNewProduct);
export const ProductRouter = router;
