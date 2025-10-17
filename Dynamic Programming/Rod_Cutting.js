/*
Given a rod of length n inches and an array price[]. price[i] denotes the value of a piece of length i. 
The task is to determine the maximum value obtainable by cutting up the rod and selling the pieces.

Note: price[] is 1-indexed array.

Input: price[] =  [1, 5, 8, 9, 10, 17, 17, 20]
Output: 22
Explanation:  The maximum obtainable value is 22 by cutting in two pieces of lengths 2 and 6, i.e., 5 + 17 = 22.

Input : price[] =  [3, 5, 8, 9, 10, 17, 17, 20]
Output : 24
Explanation : The maximum obtainable value is 24 by cutting the rod into 8 pieces of length 1, i.e, 8*price[1]= 8*3 = 24.

Input : price[] =  [3]
Output : 3
Explanation: There is only 1 way to pick a piece of length 1.
*/

function rodCuttingMemoization(
  price,
  length = Array.from({ length: price.length }, (_, idx) => idx + 1),
  N = price.length,
  i = 0,
  memo = Array.from({ length: price.length + 1 }, () => Array(N + 1).fill(-1)),
) {
  // base case
  if (i === length.length || N === 0) return 0;

  // if value aready computed
  if (memo[i][N] !== -1) return memo[i][N];

  let pick = 0;
  // include
  if (length[i] <= N) {
    pick =
      price[i] + rodCuttingMemoization(price, length, N - length[i], i, memo);
  }

  // exclude
  let notPick = rodCuttingMemoization(price, length, N, i + 1, memo);

  // store the result in memo
  memo[i][N] = Math.max(pick, notPick);
  return memo[i][N];
}

// Using Recusrion

function rodCuttingRecursion(
  price,
  length = Array.from({ length: price.length }, (_, idx) => idx + 1),
  N = price.length,
  i = 0,
) {
  // base case
  if (i === length.length || N === 0) return 0;

  let pick = 0;
  // include
  if (length[i] <= N) {
    pick = price[i] + rodCuttingRecursion(price, length, N - length[i], i);
  }

  // if exclude
  let notPick = rodCuttingRecursion(price, length, N, i + 1);

  return Math.max(pick, notPick);
}

// Test

console.log(rodCuttingMemoization([1, 5, 8, 9, 10, 17, 17, 20]));
console.log(rodCuttingRecursion([1, 5, 8, 9, 10, 17, 17, 20]));
