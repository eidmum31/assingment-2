import { Request, Response } from 'express';

import { ProductServices } from './product.service';
import { error } from 'console';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    console.log(searchTerm);
    const result = await ProductServices.getAllProductsFromDb(searchTerm);
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDb(productId);
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const { productId } = req.params;
    console.log(product, productId);
    const result = await ProductServices.updateProductInDb(product, productId);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    console.log(error);
  }
};

export const productControllers = {
  addNewProduct,
  getAllProducts,
  updateProduct,
  getSingleProduct,
};
