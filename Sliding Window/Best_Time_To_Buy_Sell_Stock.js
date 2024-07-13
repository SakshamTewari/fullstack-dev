/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

// BRUTE FORCE
//Time: O[n2]

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (j = i + 1; j < prices.length; j++) {
      let newProfit = prices[j] - prices[i];
      if (newProfit > maxProfit) maxProfit = newProfit;
    }
  }
  return maxProfit;
};

//One Pass
//Time: O[n]

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
  }
  return maxProfit;
};
