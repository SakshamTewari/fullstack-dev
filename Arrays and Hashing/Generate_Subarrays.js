/*
Given an array arr[], the task is to generate all the possible subarrays of the given array.

Examples: 

Input: arr[] = [1, 2, 3]
Output: [ [1], [1, 2], [2], [1, 2, 3], [2, 3], [3] ]

Input: arr[] = [1, 2]
Output: [ [1], [1, 2], [2] ]
*/

function generateSubarrays(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let subarray = [];
    for (j = i; j < arr.length; j++) {
      subarray.push(arr[j]);
      result.push([...subarray]);
    }
  }
  return result;
}

// using Recursion

function generateSubarraysRecursive(arr, result = [], i = 0, j = 0) {
  // base case : if i reaches end
  if (i >= arr.length) return result;

  // if j reaches end, move to next i
  if (j === arr.length) {
    return generateSubarraysRecursive(arr, result, i + 1, i + 1);
  }

  // take subarray from i to j
  result.push(arr.slice(i, j + 1));

  // move j forward
  return generateSubarraysRecursive(arr, result, i, j + 1);
}

// Test
console.log(generateSubarrays([1, 2, 3]));
console.log(generateSubarraysRecursive([1, 2, 3]));
