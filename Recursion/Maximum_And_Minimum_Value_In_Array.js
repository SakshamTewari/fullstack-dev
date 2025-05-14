/*
Given an array of integers arr, the task is to find the minimum and maximum element of that array using recursion.

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: min = -5, max = 8
*/

function findMin(arr, i = 0) {
  if (i === arr.length - 1) return arr[i];
  return Math.min(arr[i], findMin(arr, i + 1));
}

function findMax(arr, i = 0) {
  if (i === arr.length - 1) return arr[i];
  return Math.max(arr[i], findMax(arr, i + 1));
}

// Test
const arr = [1, 4, 3, -5, -4, 8, 6];
console.log(findMax(arr, 0));
console.log(findMin(arr, 0));
