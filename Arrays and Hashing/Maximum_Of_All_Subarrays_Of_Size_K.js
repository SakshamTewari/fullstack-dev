/*
Given an array arr[] of integers and an integer k, your task is to find the maximum value for each contiguous subarray of size k. 
The output should be an array of maximum values corresponding to each contiguous subarray.

Example : 

Input: arr[] = [1, 2, 3, 1, 4, 5, 2, 3, 6], k = 3
Output: [3, 3, 4, 5, 5, 5, 6] 

*/

function maximum_of_subarrays(arr, k) {
  let result = [];
  let i = 0,
    j = 0;
  let max = -Infinity;
  while (j < arr.length) {
    if (arr[j] > max) {
      max = arr[j];
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      let windowMax = Math.max(max, arr[j]);
      result.push(windowMax);
      i++;
      j++;
    }
  }
  return result;
}

// Test
console.log(maximum_of_subarrays([1, 2, 3, 1, 4, 5, 2, 3, 6], 3));
