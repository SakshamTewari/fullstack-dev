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

/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let res = [];

  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) map.set(nums1[i], map.get(nums1[i]) + 1);
    else map.set(nums1[i], 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map.get(nums2[i]) > 0) {
      res.push(nums2[i]);
      map.set(nums2[i], map.get(nums2[i]) - 1);
    }
  }
  return res;
};

// Test
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersect([1, 2, 2, 1], [2, 2]));
