// Leetcode-200

function numberOfIslands(grid) {
  let rows = grid.length;
  let cols = grid[0].length;
  let count = 0;

  function dfs(row, col) {
    // Boundary
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] === "0"
    ) {
      return;
    }

    // mark visited
    grid[row][col] = "0";

    // Explore four directions
    dfs(row - 1, col); // Up
    dfs(row + 1, col); // Down
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  }

  // Traverse every cell
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(row, col);
      }
    }
  }

  return count;
}
