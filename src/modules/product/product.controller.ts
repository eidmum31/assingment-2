import { Request, Response } from 'express';

import { ProductServices } from './product.service';

import ProductZodSchema from './product.validation';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.getAllProductsFromDb(
      searchTerm as string | undefined,
    );
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const addNewProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const validatedProduct = ProductZodSchema.parse(product);
    const result = await ProductServices.addNewProductToDb(validatedProduct);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductInDb(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const productControllers = {
  addNewProduct,
  getAllProducts,
  updateProduct,
  getSingleProduct,
  deleteProduct,
};
