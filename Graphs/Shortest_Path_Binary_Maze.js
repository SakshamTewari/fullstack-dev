/*
Given an M x N matrix where each element can either be 0 or 1. We need to find the shortest path between a given source cell to a destination cell. The path can only be created out of a cell if its value is 1.
Note: You can move into an adjacent cell in one of the four directions, Up, Down, Left, and Right if that adjacent cell is filled with element 1.

Example:

Input: mat[][] = [[1, 1, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1], [1, 1, 0, 0], [1, 0, 0, 1]], source = [0, 1], destination = {2, 2}
Output: 3
Explanation: The path is (0, 1) -> (1, 1) -> (2, 1) - > (2, 2) (the same is highlighted below)
1 1 1 1
1 1 0 1
1 1 1 1
1 1 0 0
1 0 0 1
*/

function shortestPathBFS(mat, source, destination) {
  const rows = mat.length;
  const cols = mat[0].length;

  const [sr, sc] = source;
  const [dr, dc] = destination;

  // if source or destination is invalid
  if (mat[sr][sc] === 0 || mat[dr][dc] === 0) return -1;

  // visited matrix
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  // directions
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // queue : row, col, distance
  const queue = [];

  queue.push([sr, sc, 0]);
  visited[sr][sc] = true;

  while (queue.length > 0) {
    const [r, c, dist] = queue.shift();

    // if destination reached
    if (r === dr && c === dc) return dist;

    // explore neighbors
    for (let [drx, dcx] of dirs) {
      const newRow = r + drx;
      const newCol = c + dcx;

      // check boundaries
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        mat[newRow][newCol] === 1 &&
        !visited[newRow][newCol]
      ) {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol, dist + 1]);
      }
    }
  }
  return -1;
}

// Test
const mat = [
  [1, 1, 1, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
];

console.log(shortestPathBFS(mat, [0, 1], [2, 2]));
