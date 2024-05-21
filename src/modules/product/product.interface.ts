export type TVariants = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  instock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariants[];
  inventory: TInventory;
};
