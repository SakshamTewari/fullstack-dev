/*
Given an array arr[] of n integers and an integer target, the task is to find any quadruplet in arr[] such that it's sum is equal to the target.

Note: If there are multiple quadruplets with sum = target, return any one of them.

Examples:

Input: arr[] = {2, 4, 6, 8, 1, 3}, target = 15
Output: {2, 4, 6, 3}
Explanation: The quadruplet {2, 4, 6, 3} has sum = 15.

Input: arr[] = {1, 2, 3, 4, 10}, target = 20
Output: {}
Explanation: No quadruplet adds up to a sum of 20.
*/

// Sort + 2-pointer [O(n^3) time, O(1) space]
function fourSum(nums, target) {
  let result = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
}

// Test

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
