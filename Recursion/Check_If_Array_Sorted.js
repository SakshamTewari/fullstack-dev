/*
Given an array of size n, the task is to check if it is sorted in ascending order or not. 
Equal values are allowed in an array and two consecutive equal values are considered sorted.

Input: arr[] = [20, 20, 45, 89, 89, 90]
Output: Yes

Input: arr[] = [20, 20, 78, 98, 99, 97]
Output: No
*/

function isSortedArray(arr, i = arr.length - 1) {
  if (i === 0) return true;

  if (arr[i] < arr[i - 1]) return false;

  return isSortedArray(arr, i - 1);
}

// Test
console.log(isSortedArray([20, 20, 45, 89, 89, 90]));
console.log(isSortedArray([20, 20, 78, 98, 99, 97]));
