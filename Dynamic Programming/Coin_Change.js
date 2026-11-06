/*
Given an integer array of coins[] of size n representing different types of denominations and an integer sum, the task is to count all combinations of coins to make a given value sum.  

Note: Assume that you have an infinite supply of each type of coin. 

Examples: 

Input: sum = 4, coins[] = [1, 2, 3]
Output: 4
Explanation: There are four solutions: [1, 1, 1, 1], [1, 1, 2], [2, 2] and [1, 3]

Input: sum = 10, coins[] = [2, 5, 3, 6]
Output: 5
Explanation: There are five solutions: 
[2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 2, 6], [2, 3, 5] and [5, 5]

Input: sum = 10, coins[] = [10]
Output: 1
Explanation: The only is to pick 1 coin of value 10.

Input: sum = 5, coins[] = [4]
Output: 0
Explanation:  We cannot make sum 5 with the given coins
*/

function coinChangeMemoization(coins, sum, i = coins.length, memo = {}) {
  // base case
  if (sum === 0) return 1;
  if (sum < 0 || i === 0) return 0;

  // unique key
  const key = `${i} - ${sum}`;

  if (key in memo) return memo[key];

  // total of include/exclude coin
  memo[key] =
    coinChangeMemoization(coins, sum - coins[i - 1], i, memo) +
    coinChangeMemoization(coins, sum, i - 1, memo);
  return memo[key];
}

// Using recursion

function coinChangeRecursion(coins, sum, i = coins.length) {
  // base case
  if (sum === 0) return 1;
  if (sum < 0 || i < 0) return 0;

  // total of include/exclude coin
  return (
    coinChangeRecursion(coins, sum - coins[i - 1], i) +
    coinChangeRecursion(coins, sum, i - 1)
  );
}

// Test
console.log(coinChangeMemoization([1, 2, 3], 4));
console.log(coinChangeRecursion([1, 2, 3], 4));

/*
Given an array of coins[] of size n and a target value sum, where coins[i] represent the coins of different denominations. 
You have an infinite supply of each of the coins. The task is to find the minimum number of coins required to make the given value sum. 
If it is not possible to form the sum using the given coins, return -1.

Examples:  

Input: coins[] = [25, 10, 5], sum = 30
Output: 2
Explanation : Minimum 2 coins needed, 25 and 5  

Input: coins[] = [9, 6, 5, 1], sum = 19
Output: 3
Explanation: 19 = 9 + 9 + 1

Input: coins[] = [5, 1], sum = 0
Output: 0
Explanation: For 0 sum, we do not need a coin

Input: coins[] = [4, 6, 2], sum = 5
Output: -1
Explanation: Not possible to make the given sum.
*/

function minCoinsRecusrsion(coins, sum, i = coins.length) {
  if (sum === 0) return 1;
  if (sum < 0 || i === 0) return 0;

  let pick = 0;
  if (coins[i-1])
}
