import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const getOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await OrderServices.getOrdersFromDb(email);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const addNewOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const result = await OrderServices.addNewOrderToDb(order);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const OrderControllers = {
  getOrders,
  addNewOrder,
};
