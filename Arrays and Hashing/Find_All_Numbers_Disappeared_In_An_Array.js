/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 
Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let set = new Set();
  let res = [];

  for (let n of nums) {
    if (!set.has(n)) {
      set.add(n);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      res.push(i);
    }
  }
  return res;
};

// ================ Try without extra space ===============//

var findDisappearedNumbers = function (nums) {
  let i = 0;

  while (i < nums.length) {
    let correctIndex = nums[i] - 1;

    // Only swap if the current number is not in its correct position
    // and if the number we're swapping with is not already in its correct position.
    // this works because we will only increment 'i' when after swapping, 'i' receives the correct element
    if (nums[i] !== nums[correctIndex]) {
      swap(nums, i, correctIndex);
    } else {
      i++;
    }
  }

  let res = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      res.push(j + 1);
    }
  }

  return res;
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
