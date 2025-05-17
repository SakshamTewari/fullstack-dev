/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  let mid = Math.floor(start + (end - start) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else return binarySearch(arr, target, mid + 1, end);
}

// Test
console.log(binarySearch([1, 3, 5, 7, 9, 11], 9));
console.log(binarySearch([1, 3, 5, 7, 9, 11], 4));
