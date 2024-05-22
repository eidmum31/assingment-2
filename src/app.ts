import { Request, Response } from 'express';
import cors from 'cors';

import express from 'express';
import { ProductRouter } from './modules/product/product.route';
import { OrderRoute } from './modules/order/order.route';
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api/products', ProductRouter);
app.use('/api/orders', OrderRoute);

app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: 'Route not found',
  });
});
export default app;
