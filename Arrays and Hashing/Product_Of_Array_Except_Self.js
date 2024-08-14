/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

 
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let result = [];
  let right = [];
  let left = [];
  right[nums.length - 1] = 1;
  left[0] = 1;

  // right
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  // left
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};
