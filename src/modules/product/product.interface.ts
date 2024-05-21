type TVariants = {
  type: string;
  value: string;
};

type TInventory = {
  quantity: number;
  instock: boolean;
};

type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: TInventory;
};
export default TProduct;
