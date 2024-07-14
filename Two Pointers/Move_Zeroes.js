/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let cursor = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    } else {
      // nums[cursor++] = nums[i];
      // nums[i]= 0;  this is wrong as this will fail nums: [1]
      // swap is the best option.
      swap(nums, cursor++, i);
    }
  }
  return nums;
};

function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
