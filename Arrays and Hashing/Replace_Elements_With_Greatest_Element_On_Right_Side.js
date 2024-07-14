/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
*/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let maxRight = arr[arr.length - 1];
  let result = [];
  result[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    result[i] = Math.max(arr[i + 1], maxRight);
    if (arr[i] > maxRight) {
      maxRight = arr[i];
    }
  }

  return result;
};
