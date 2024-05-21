import { TProduct } from './product.interface';
import ProductModel from './product.model';

const addNewProductToDb = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductsFromDb = async () => {
  const result = ProductModel.find();
  return result;
};

export const ProductServices = {
  addNewProductToDb,
  getAllProductsFromDb,
};
