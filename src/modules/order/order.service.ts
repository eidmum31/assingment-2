import { TOrder } from './order.interface';
import OrderModel from './order.model';

const getOrdersFromDb = async (email: string) => {
  if (email) {
    const result = await OrderModel.find({ email: email });
    return result;
  }
  const result = await OrderModel.find();
  return result;
};
const addNewOrderToDb = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};
export const OrderServices = {
  getOrdersFromDb,
  addNewOrderToDb,
};
