import { Product } from './product.model';

export const products: Product[] = [];

export const createProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (products: Product[]): number => {
  let total: number = products.reduce((result, current) => {
    return result + current.stock;
  }, 0);
  return total;
};
