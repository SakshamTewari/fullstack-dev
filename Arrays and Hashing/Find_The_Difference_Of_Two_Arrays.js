/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

 Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let distinct1 = [];
  let distinct2 = [];
  let set1 = new Set();
  let set2 = new Set();

  // put values of nums1 in the map
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    set2.add(nums2[i]);
  }

  // put nums1/set1 values in distinct1
  for (let i = 0; i < nums1.length; i++) {
    if (!set2.has(nums1[i]) && set1.has(nums1[i])) {
      distinct1.push(nums1[i]);
      set1.delete(nums1[i]);
    }
  }

  // put nums2/set2 values in distinct2
  for (let i = 0; i < nums2.length; i++) {
    if (!set1.has(nums2[i]) && set2.has(nums2[i])) {
      distinct2.push(nums2[i]);
      set2.delete(nums2[i]);
    }
  }

  return [distinct1, distinct2];
};
