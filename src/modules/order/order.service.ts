import ProductModel from '../product/product.model';
import { TOrder } from './order.interface';
import Order from './order.model';

const getOrdersFromDb = async (email: string | undefined) => {
  if (email) {
    const result = await Order.find({ email: email });
    if (result.length === 0) {
      throw new Error('Order not found');
    }

    return result;
  }
  const result = await Order.find();
  return result;
};
const addNewOrderToDb = async (order: TOrder) => {
  const isStock = await Order.isStockExists(order.productId, order.quantity);

  let newQuantity: number, newIsStock: boolean;
  if (isStock) {
    newQuantity = isStock?.inventory?.quantity - order.quantity;
    if (newQuantity === 0) newIsStock = false;
    else newIsStock = true;

    await ProductModel.findByIdAndUpdate(
      { _id: order.productId },
      { inventory: { inStock: newIsStock, quantity: newQuantity } },
    );
    const result = await Order.create(order);
    return result;
  } else {
    throw new Error('Insufficient quantity available in inventory');
  }
};
export const OrderServices = {
  getOrdersFromDb,
  addNewOrderToDb,
};
