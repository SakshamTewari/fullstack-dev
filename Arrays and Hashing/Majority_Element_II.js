/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 Example 1:

Input: nums = [3,2,3]
Output: [3]
*/

//=====================Time: O(n) ; Space: O(n)============================
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let minimumVal = Math.floor(nums.length / 3) + 1;
  let map = new Map();
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
    // only check for 'minimumVal' as we don't need to add same nums[i] again if it appears next time
    if (map.get(nums[i]) == minimumVal) res.push(nums[i]);
  }
  return res;
};
