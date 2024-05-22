import { z } from 'zod';

const OrderZodSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is a required field' }),
  productId: z.string().min(1, { message: 'Product id is a required field' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  quantity: z
    .number()
    .positive({ message: 'Quantity must be a positive number' }),
});

export default OrderZodSchema;
