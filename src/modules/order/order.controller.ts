import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import OrderZodSchema from './order.validation';

const getOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const result = await OrderServices.getOrdersFromDb(
      email as string | undefined,
    );
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const addNewOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const validatedData = OrderZodSchema.parse(order);

    const result = await OrderServices.addNewOrderToDb(validatedData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const OrderControllers = {
  getOrders,
  addNewOrder,
};
