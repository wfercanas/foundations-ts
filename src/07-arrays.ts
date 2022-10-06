(() => {
  const prices = [1, 2, 3, 4, 5, 6, 4, 'hola', true];
  console.log('prices', prices);

  let mixed: (number[] | string[] | boolean[])[] = [];
  mixed.push(['Hi']);
  mixed.push([1]);
  console.log('mixed', mixed);

  let forObjects: Object = {};
  forObjects = [];
  console.log('forObjects', forObjects);

  let numbers: number[] = [];
  numbers = prices.map((price) => price * 2);
})();
