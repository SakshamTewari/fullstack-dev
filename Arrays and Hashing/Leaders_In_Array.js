/*
Given an integer array nums, return a list of all the leaders in the array.
A leader in an array is an element whose value is strictly greater than all elements to its right in the given array. 
The rightmost element is always a leader. The elements in the leader array must appear in the order they appear in the nums array.


Examples:
Input: nums = [1, 2, 5, 3, 1, 2]
Output: [5, 3, 2]
Explanation: 2 is the rightmost element, 3 is the largest element in the index range [3, 5], 5 is the largest element in the index range [2, 5]

Input: nums = [-3, 4, 5, 1, -4, -5]
Output: [5, 1, -4, -5]
*/

function leaderArray(arr) {
  let result = [];
  result[0] = arr[arr.length - 1];
  let max = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      result.push(arr[i]);
    }
  }
  return result.reverse();
}

// Test

console.log(leaderArray([1, 2, 5, 3, 1, 2]));
console.log(leaderArray([-3, 4, 5, 1, -4, -5]));
