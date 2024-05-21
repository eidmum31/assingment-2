import { Request, Response } from 'express';

import { ProductServices } from './product.service';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDb();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const addNewProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.addNewProductToDb(product);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const productControllers = {
  addNewProduct,
  getAllProducts,
};
