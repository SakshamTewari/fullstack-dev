/*
You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example 1:


Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let set = new Set();

  if (!grid || grid.length === 0) return 0; // Check if grid is defined and not empty

  function dfs(i, j) {
    if (i >= grid.length || grid[i] === undefined || j >= grid[i].length || i < 0 || j < 0 || grid[i][j] == 0) {
      return 1; // Add to perimeter if out of bounds or water
    }
    if (set.has(i + ',' + j)) {
      return 0; // Already visited
    }
    set.add(i + ',' + j); // Mark the cell as visited

    // Explore all four directions and accumulate perimeter
    return dfs(i, j + 1) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i - 1, j);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        // Start DFS from the first land cell found
        return dfs(i, j);
      }
    }
  }

  return 0; // No land found
};

// Practice code (without finding the first land cell)

function islandPerimeterDFS(grid, i = 0, j = 0, set = new Set()) {
  // base case
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) return 1;
  if (set.has(i + ',' + j)) return 0;
  set.add(i + ',' + j);

  return (
    islandPerimeterDFS(grid, i + 1, j, set) +
    islandPerimeterDFS(grid, i - 1, j, set) +
    islandPerimeterDFS(grid, i, j + 1, set) +
    islandPerimeterDFS(grid, i, j - 1, set)
  );
}

// Test
console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
);
console.log(
  islandPerimeterDFS([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
);
