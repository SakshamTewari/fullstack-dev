/*
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.

 
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let result = [];
  let set1 = new Set();
  let set2 = new Set();

  for (let val of nums1) {
    set1.add(val);
  }
  for (let val of nums2) {
    set2.add(val);
  }
  // if using 'set2' in below loop, it already takes care of duplicates
  // but if using nums2, then 'delete' elements from set1 to avoid duplicates after pushing in result
  for (let val of set2) {
    if (set1.has(val)) {
      result.push(val);
    }
  }
  return result;
};
