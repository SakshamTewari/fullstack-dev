/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let frequencyMap = new Map();
  for (let num of nums) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }
  for (let [key, value] of frequencyMap) {
    if (value > nums.length / 2) {
      return key;
    }
  }
  return 0;
};
