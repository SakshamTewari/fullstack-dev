/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1

Input: grid = [[0,2]]
Output: 0
*/

// This is a BFS problem
function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let queue = [];
  let freshCount = 0;
  let minutes = 0;

  const directions = [
    [0, 1], //right
    [0, -1], //left
    [1, 0], //down
    [-1, 0], //up
  ];

  // populate queue with initial rotten and count fresh ones
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      } else if (grid[r][c] === 1) {
        freshCount++;
      }
    }
  }

  // BFS
  while (queue.length > 0 && freshCount > 0) {
    let rottenOrangesForThisMinute = queue.length;
    for (let i = 0; i < rottenOrangesForThisMinute; i++) {
      const [x, y] = queue.shift(); // take one rotten orange

      //Checking in all 4 directions
      for (let [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        // if new position is within the grid and it has a fresh orange to infect
        if (
          newX >= 0 &&
          newX < rows &&
          newY >= 0 &&
          newY < cols &&
          grid[newX][newY] === 1
        ) {
          grid[newX][newY] = 2; // rot it
          freshCount--;
          queue.push([newX, newY]); // this can also infect others next time
        }
      }
    }
    minutes++;
  }

  // as we need to infect all fresh ones.
  if (freshCount > 0) {
    return -1;
  }

  return minutes;
}

// Test

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
); // Output: 4
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
); // Output: -1
console.log(orangesRotting([[0, 2]])); // Output: 0
