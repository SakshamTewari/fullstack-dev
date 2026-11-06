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

/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cursor = 1;
  let flag = false; //flag is 'true' when array has duplicate

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      if (!flag) {
        nums[cursor++] = nums[i];
        flag = true;
      }
    } else {
      nums[cursor++] = nums[i];
      flag = false;
    }
  }
  return cursor;
};

// Test
console.log(removeDuplicatesSet([1, 1, 2, 3, 2, 4, 3, 4, 5]));
