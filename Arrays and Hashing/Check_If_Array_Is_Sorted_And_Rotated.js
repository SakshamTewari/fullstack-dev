/*
Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.
There may be duplicates in the original array.
Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

 
Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let breaks = 0; // max 1 break possible
  if (nums.length < 2) return true;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      breaks++;

      if (breaks > 1) return false;
    }
  }
  // NOW after the loop ends we will just compare the first element with the last element
  // and also we check if the breaks is not 0 as if breaks is 0 that means it is a sorted array
  // and we have to return true for sorted array which has not been reversed.
  if (nums[nums.length - 1] > nums[0] && breaks !== 0) return false;

  return true;
};
