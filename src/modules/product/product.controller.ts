import { Request, Response } from 'express';

import { ProductServices } from './product.service';

const addNewProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.addNewProductToDb(product);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const productControllers = {
  addNewProduct,
};
