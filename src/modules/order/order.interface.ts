import { Model } from 'mongoose';
import { TInventory, TProduct } from '../product/product.interface';

export type TOrder = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};

export interface OrderModel extends Model<TOrder> {
  isStockExists(id: string, qty: number): Promise<TProduct | null>;
}
