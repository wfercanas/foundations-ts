(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: String,
    createdAt: Date,
    stock: number,
    size: Size
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(producto1);
})();

(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';
  const createProductToJsonV2 = (
    title: String,
    createdAt: Date,
    stock: number,
    size?: Size
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto2 = createProductToJsonV2('P1', new Date(), 12);
  console.log(producto2);
})();
