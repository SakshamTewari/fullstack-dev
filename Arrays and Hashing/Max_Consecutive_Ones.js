/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 
Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == 1) {
      let count = 1;
      while (nums[++i] == 1) {
        count++;
      }
      if (count > maxCount) maxCount = count;
    }
    i++;
  }
  return maxCount;
};
