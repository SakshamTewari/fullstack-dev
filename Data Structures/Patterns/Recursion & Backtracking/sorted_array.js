// GFG - https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1

function checkSortedArray(arr, i = 0) {
  if (i === arr.length - 1) return true;

  if (arr[i] > arr[i + 1]) return false;

  return checkSortedArray(arr, i + 1);
}

// Test

console.log(checkSortedArray([1, 2, 3, 4, 1]));
