/*
Given an matrix of size m x n, the task is to find the count of all unique possible paths from top left to the bottom right with the constraints that from each cell we can either move only to the right or down.

Examples: 

Input: m = 2, n = 2
Output: 2
Explanation: There are two paths
(0, 0) -> (0, 1) -> (1, 1)
(0, 0) -> (1, 0) -> (1, 1)

Input: m = 2, n = 3
Output: 3
Explanation: There are three paths
(0, 0) -> (0, 1) -> (0, 2) -> (1, 2)
(0, 0) -> (0, 1) -> (1, 1) -> (1, 2)
(0, 0) -> (1, 0) -> (1, 1) -> (1, 2)
*/

function uniquePaths(m, n, i = 0, j = 0, memo = {}) {
  // base case
  if (i >= m || j >= n) return 0; // invalid cell
  if (i === m - 1 && j === n - 1) return 1; // destination

  const key = `${i}-${j}`;
  if (key in memo) return memo[key];

  const right = uniquePaths(m, n, i, j + 1);
  const down = uniquePaths(m, n, i + 1, j);

  memo[key] = right + down;
  return memo[key];
}

// Test
console.log(uniquePaths(2, 3));
