import { createProduct, calcStock, products } from './product.service';

createProduct({
  title: 'Product1',
  createdAt: new Date(),
  stock: 5,
});

createProduct({
  title: 'Product2',
  createdAt: new Date(),
  stock: 2,
  size: 'M',
});

console.log(products);
console.log(calcStock(products));
