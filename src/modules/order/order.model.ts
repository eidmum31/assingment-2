import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const OrderSchema = new Schema<TOrder>({
  email: { type: String, required: [true, 'Email is a required field'] },
  productId: {
    type: String,
    required: [true, 'Product id is a required field'],
  },
  price: { type: Number, required: [true, 'Price is a required field'] },
  quantity: { type: Number, required: [true, 'Quantity is a required field'] },
});

const OrderModel = model<TOrder>('order', OrderSchema);
export default OrderModel;
