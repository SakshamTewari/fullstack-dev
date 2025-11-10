/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
Return any array that satisfies this condition.

 
Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let cursor = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isEven(nums[i])) {
      swap(nums, cursor++, i);
    }
  }
  return nums;
};

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

function swap(nums, i, j) {
  let c = nums[i];
  nums[i] = nums[j];
  nums[j] = c;
}
