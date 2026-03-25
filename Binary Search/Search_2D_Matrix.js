/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  const rowLen = matrix.length;
  const colLen = matrix[0].length;

  let left = 0;
  let right = rowLen * colLen - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / rowLen);
    const col = mid % rowLen;
    const midVal = matrix[row][col];

    if (midVal === target) {
      return true;
    } else if (midVal < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

/*
You have been given a 2-D array 'mat' of size 'N x M' where 'N' and 'M' denote the number of rows and columns, respectively. 
The elements of each row and each column are sorted in non-decreasing order. But, the first element of a row is not necessarily greater than the last element of the previous row (if it exists). 
You are given an integer ‘target’, and your task is to find if it exists in the given 'mat' or not.
*/
function searchMatrix2(mat, target) {
  let n = mat.length;
  let m = mat[0].length;

  let i = 0;
  let j = m - 1;

  while (i < n && j >= 0) {
    if (mat[i][j] === target) return true;
    else if (mat[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

// Test

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];

console.log(searchMatrix(matrix, 3));
console.log(searchMatrix(matrix, 13));
console.log(searchMatrix2(matrix, 11));
