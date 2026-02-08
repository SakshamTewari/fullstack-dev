/*
Given an n × m grid[][] consisting of 'L' (land) and 'W' (water), we need to count the total number of islands present in the grid without modifying the original grid.
An island is defined as a group of connected 'L' cells that are adjacent horizontally, vertically, or diagonally, and surrounded by water or the boundary of the grid.

Examples:

Input: grid[][] = [['L', 'L', 'W', 'W', 'W'],
                            ['W', 'L', 'W', 'W', 'L'],
                           ['L', 'W', 'W', 'L', 'L'],
                          ['W', 'W', 'W', 'W', 'W'],
                         ['L', 'W', 'L', 'L', 'W']]
Output: 4
*/

function countIslands(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "L" && !visited[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }

  function dfs(x, y) {
    visited[x][y] = true;
    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        grid[nx][ny] === "L" &&
        !visited[nx][ny]
      ) {
        dfs(nx, ny);
      }
    }
  }

  return count;
}

// Test
const grid = [
  ["L", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "L"],
  ["L", "W", "W", "L", "L"],
  ["W", "W", "W", "W", "W"],
  ["L", "W", "L", "L", "W"],
];
console.log(countIslands(grid));
