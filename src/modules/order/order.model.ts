import { Schema, model } from 'mongoose';
import { OrderModel, TOrder, UpdateOrderModel } from './order.interface';
import ProductModel from '../product/product.model';
import { TInventory, TProduct } from '../product/product.interface';

const OrderSchema = new Schema<TOrder, OrderModel, UpdateOrderModel>({
  email: { type: String, required: [true, 'Email is a required field'] },
  productId: {
    type: String,
    required: [true, 'Product id is a required field'],
  },
  price: { type: Number, required: [true, 'Price is a required field'] },
  quantity: { type: Number, required: [true, 'Quantity is a required field'] },
});
OrderSchema.statics.isStockExists = async (
  id: string,
  qty: number,
): Promise<TProduct | null> => {
  const result: TProduct | null = await ProductModel.findOne({ _id: id });
  console.log(result);
  if ((result as TProduct)?.inventory?.quantity >= qty) {
    return result;
  } else return null;
};

const Order = model<TOrder, OrderModel, UpdateOrderModel>('order', OrderSchema);
export default Order;
