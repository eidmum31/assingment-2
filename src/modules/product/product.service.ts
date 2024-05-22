import { TProduct } from './product.interface';
import ProductModel from './product.model';

const addNewProductToDb = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductsFromDb = async (searchTerm: string) => {
  if (!searchTerm) {
    const result = await ProductModel.find();
    return result;
  } else {
    console.log(searchTerm);
    const regex = new RegExp(searchTerm, 'i');
    const result = await ProductModel.find({
      $or: [{ name: { $regex: regex } }, { description: { $regex: regex } }],
    });
    return result;
  }
};

const updateProductInDb = async (product: TProduct, productId: string) => {
  const result = await ProductModel.findByIdAndUpdate(
    { _id: productId },
    product,
  );
  return result;
};

const deleteProductInDb = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId });
  return result;
};
const getSingleProductFromDb = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId });
  return result;
};
export const ProductServices = {
  addNewProductToDb,
  getAllProductsFromDb,
  updateProductInDb,
  getSingleProductFromDb,
  deleteProductInDb,
};
