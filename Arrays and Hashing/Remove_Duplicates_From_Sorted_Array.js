/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Example 1:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cursor = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) {
      continue;
    } else {
      nums[++cursor] = nums[i + 1];
    }
  }
  return cursor;
};

// Using Set
function removeDuplicatesSet(nums) {
  let result = [];
  let seen = new Set();

  for (let num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }
  return result;
}

// Test
console.log(removeDuplicatesSet([1, 1, 2, 3, 2, 4, 3, 4, 5]));
