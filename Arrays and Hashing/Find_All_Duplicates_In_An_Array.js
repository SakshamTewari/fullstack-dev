/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 
Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let result = [];
  let i = 0;

  while (i < nums.length) {
    let correctIndex = nums[i] - 1;

    if (nums[i] !== nums[correctIndex]) {
      // Swap the current element with the element at its correct position
      swap(nums, i, correctIndex);
    } else {
      i++;
    }
  }

  // After all elements are placed in their correct positions, find duplicates
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      result.push(nums[i]);
    }
  }

  return result;
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
  return nums;
}
