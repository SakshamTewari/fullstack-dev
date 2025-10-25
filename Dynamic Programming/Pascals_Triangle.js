/*
Given a non-negative integer n, the task is to find the nth row of Pascal's Triangle. 

Note: The row index starts from 1.

Examples:

Input: n = 4
Output: 1 3 3 1
Explanation: The elements in the 4th row are 1 3 3 1 as shown in Pascal Triangle.
*/

function nthRow(n, j, memo = {}) {
  if (j === 0 || j === n) return 1;

  const key = `${n}-${j}`;
  if (key in memo) return memo[key];

  memo[key] = nthRow(n - 1, j - 1, memo) + nthRow(n - 1, j, memo);
  return memo[key];
}

// Test
console.log(nthRow(4, 0));
console.log(nthRow(4, 1));
console.log(nthRow(4, 2));
console.log(nthRow(4, 3));
