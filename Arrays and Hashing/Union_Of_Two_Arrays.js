/*
Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. 
The elements in the union must be in ascending order.
The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.


Example:  

Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]
Output: [1, 2, 3, 4, 5, 7]
Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2
*/

function union(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (!result.includes(arr2[j])) {
      result.push(arr2[j]);
    }
  }

  // sort
  result.sort((a, b) => a - b);

  return result;
}

// Test

console.log(union([1, 2, 3, 4, 5], [1, 2, 7]));
