import { Schema, model } from 'mongoose';
import { TProduct, TInventory, TVariants } from './product.interface';
const VariantsSchema = new Schema<TVariants>({
  type: { type: String, required: [true, 'Type is a required field'] },
  value: { type: String, required: [true, 'Value is a required field'] },
});
const InventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: [true, 'Quantity is a required field'] },
  instock: {
    type: Boolean,
    required: [true, 'Stock numbers is a required field'],
  },
});

export const ProductSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'Name is a required field'],
    unique: [true, 'Product id must be unique'],
  },
  description: {
    type: String,
    required: [true, 'Description is a required field'],
  },
  price: { type: Number, required: [true, 'Price is a required field'] },
  category: { type: String, required: [true, 'Category is a required field'] },
  tags: { type: [String], required: [true, 'Tags is a required field'] },
  variants: {
    type: [VariantsSchema],
    required: [true, 'Variants is a required field'],
  },
  inventory: {
    type: InventorySchema,
    required: [true, 'Inventory is a required field'],
  },
  isDeleted: { type: Boolean, default: false },
});

ProductSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

ProductSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

const ProductModel = model<TProduct>('Product', ProductSchema);

export default ProductModel;
