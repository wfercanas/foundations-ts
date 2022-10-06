(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'fer@fer.co',
    password: 1234,
  });

  const products: any[] = [];

  type Size = 'S' | 'M' | 'L' | 'XL';
  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Size;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Product1',
    createdAt: new Date(),
    stock: 5,
  });
  console.log(products);
})();
