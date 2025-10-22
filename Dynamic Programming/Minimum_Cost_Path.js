/*
You are given a 2D matrix cost[][] of dimensions m × n, where each cell represents the cost of traversing through that position. 
Your goal is to determine the minimum cost required to reach the bottom-right cell (m-1, n-1) starting from the top-left cell (0,0).
The total cost of a path is the sum of all cell values along the path, including both the starting and ending positions. 
From any cell (i, j), you can move in the following three directions:

Right (i, j+1)
Down (i+1, j)
Diagonal (i+1, j+1)
Find the minimum cost path from (0,0) to (m-1, n-1), ensuring that movement constraints are followed.
*/

function minCostPath(
  cost,
  m = cost.length,
  n = cost[0].length,
  i = 0,
  j = 0,
  memo = {}
) {
  // base case
  if (i === m - 1 && j === n - 1) return cost[i][j];
  if (i >= m || j >= n) return Infinity;

  const key = `${i}-${j}`;

  if (key in memo) return memo[key];

  memo[key] =
    cost[i][j] +
    Math.min(
      minCostPath(cost, m, n, i + 1, j, memo),
      minCostPath(cost, m, n, i, j + 1, memo),
      minCostPath(cost, m, n, i + 1, j + 1, memo)
    );

  return memo[key];
}
