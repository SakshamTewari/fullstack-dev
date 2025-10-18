/*
You are given a 2D grid image[][], where each image[i][j] represents the color of a pixel in the image. 
Also provided is a coordinate(sr, sc) representing the starting pixel (row and column) and a new color value newColor.

Your task is to perform a flood fill starting from the pixel (sr, sc), changing its color and the color of all connected pixels that have the same original color. 
Two pixels are considered connected if they are adjacent horizontally or vertically (not diagonally) and have the same original color.

Example: 

Input: image = [[1, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]], sr = 1, sc = 2, newColor = 2
Output: [[2, 2, 2, 0], [0, 2, 2, 2], [1, 0, 2,2]]
Explanation: Starting from pixel (1, 2) with value 1, flood fill updates all connected pixels (up, down, left, right) with value 1 to 2, resulting in [[2, 2, 2, 0], [0, 2, 2, 2], [1, 0, 2, 2]].

Input: image = [[0, 1, 0], [0, 1, 0]], sr = 0, sc = 1, newColor = 0
Output: [[0, 0, 0], [0, 0, 0]]
Explanation: Starting from pixel (1, 2) with value 1, flood fill updates all connected pixels (up, down, left, right) with value 1 to 0, resulting in [[0, 0, 0], [0, 0, 0]].
*/

function floodfill(
  image,
  sr,
  sc,
  newColor,
  i = sr,
  j = sc,
  visited = new Set(),
  originalColor = image[sr][sc]
) {
  // base case
  if (
    i < 0 ||
    j < 0 ||
    i >= image.length ||
    j >= image[0].length ||
    image[i][j] !== originalColor ||
    visited.has(i + "," + j)
  ) {
    return;
  }
  visited.add(i + "," + j);
  image[i][j] = newColor;

  floodfill(image, sr, sc, newColor, i + 1, j, visited, originalColor);
  floodfill(image, sr, sc, newColor, i - 1, j, visited, originalColor);
  floodfill(image, sr, sc, newColor, i, j + 1, visited, originalColor);
  floodfill(image, sr, sc, newColor, i, j - 1, visited, originalColor);

  return image;
}

// Test
console.log(
  floodfill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
