/*
Given a square chessboard of n x n size, the position of the Knight and the position of a target are given. 
We need to find out the minimum steps a Knight will take to reach the target position.
*/

function minKnightSteps(N, start, target) {
  let directions = [
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
    [-2, -1],
    [-2, 1],
  ];

  const [sx, sy] = start;
  const [tx, ty] = target;

  // if at target
  if (sx === tx && sy === ty) return 0;

  const queue = [[sx, sy, 0]]; // [x,y,steps]
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[sx][sy] = true;

  while (queue.length > 0) {
    const [x, y, steps] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // check valid positions
      if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny]) {
        if (nx === tx && ny === ty) {
          return steps + 1;
        }
        visited[nx][ny] = true;
        queue.push([nx, ny, steps + 1]);
      }
    }
  }
  return -1;
}

// Test
console.log(minKnightSteps(8, [0, 0], [7, 7]));
