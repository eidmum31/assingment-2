import { z } from 'zod';

// Variants schema
const VariantsSchema = z.object({
  type: z.string().min(1, { message: 'Type is a required field' }),
  value: z.string().min(1, { message: 'Value is a required field' }),
});

// Inventory schema
const InventorySchema = z.object({
  quantity: z
    .number()
    .nonnegative({ message: 'Quantity must be a non-negative number' }),
  inStock: z.boolean({ message: 'InStock is a required field' }),
});

// Product schema
const ProductZodSchema = z.object({
  name: z.string().min(1, { message: 'Name is a required field' }),
  description: z
    .string()
    .min(1, { message: 'Description is a required field' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z.string().min(1, { message: 'Category is a required field' }),
  tags: z.array(z.string()).min(1, { message: 'Tags is a required field' }),
  variants: z
    .array(VariantsSchema)
    .min(1, { message: 'Variants is a required field' }),
  inventory: InventorySchema,
});

export default ProductZodSchema;
