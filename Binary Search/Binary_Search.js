/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
};

//Using Recursion

var search = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, start, end) {
  if (start > end) return -1;

  let mid = Math.floor((end + start) / 2);

  if (target === nums[mid]) return mid;
  else if (target < nums[mid])
    return binarySearch(nums, target, start, mid - 1);
  else return binarySearch(nums, target, mid + 1, end);
}

/*
Given an array of integers nums which is sorted in descending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
*/

function binarySearchDescending(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

// Test
console.log(binarySearchDescending([20, 17, 15, 11, 9, 8, 1], 11));
