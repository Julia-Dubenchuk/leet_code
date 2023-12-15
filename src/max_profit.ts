function maxProfit(prices: number[]): number {
  let prof = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      prof += prices[i] - prices[i - 1];
    }
  }

  return prof;
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5])); //4
