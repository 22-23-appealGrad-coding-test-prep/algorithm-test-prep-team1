/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
  let bestProfit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++){
      (prices[i] < buy) ? buy = prices[i] : null;

      (bestProfit < prices[i] - buy) ? 
          bestProfit = prices[i] - buy : null;
  }

  return bestProfit;
};