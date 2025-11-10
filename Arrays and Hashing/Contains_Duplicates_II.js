/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Using Hashset  [O(n) time, O(k) space]
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (i >= k) set.delete(nums[i - k]);
  }

  return false;
};

// Using Brute force [O(n*k) time, O(1) space]
function containsNearbyDuplicateBruteForce(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= k && i + j < nums.length; j++) {
      if (nums[i] === nums[i + j]) return true;
    }
  }
  return false;
}

// Test
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicateBruteForce([1, 2, 3, 1], 3));
