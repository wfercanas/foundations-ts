(() => {
  const calcTotal = (prices: number[]): string => {
    let total = prices.reduce((curr, acc) => {
      return curr + acc;
    });

    return total.toString();
  };

  const printTotal = (prices: number[]) => {
    const answer = calcTotal(prices);
    console.log(`El total es ${answer}`);
  };

  printTotal([1, 2, 1, 2, 1, 2]);
})();
