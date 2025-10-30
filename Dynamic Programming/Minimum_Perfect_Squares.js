/*
Given a positive integer n, the task is to find the minimum number of squares that sum to n.

Note: A number can always be represented as a sum of squares of other numbers. 
Because 1 is a square number and we can always break any number as (1*1 + 1*1 + 1*1 + ... ).

Examples : 

Input:  n = 100
Output: 1
Explanation: 100 can be written as [ 102 ] or [ 52 + 52 + 52 + 52 ] and the smallest square numbers needed is 1, in case [ 102 ].

Input:  n = 6
Output: 3
Explanation: Only possible way to write 6 as sum of squares is [ 12 + 12 + 22 ], so minimum square numbers needed is 3.
*/

function minPerfectSquares(n, memo = {}) {
  if (n === 0) return 0;
  if (n in memo) return memo[n];

  let minCount = Infinity;

  for (let i = 1; i * i <= n; i++) {
    const square = i * i;
    const count = 1 + minPerfectSquares(n - square, memo);
    minCount = Math.min(minCount, count);
  }

  memo[n] = minCount;
  return memo[n];
}

// Test
console.log(minPerfectSquares(12));
