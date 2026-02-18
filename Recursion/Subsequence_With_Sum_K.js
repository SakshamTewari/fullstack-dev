/*
 Given an array nums and an integer k. Return true if there exist subsequences such that the sum of all elements in subsequences is equal to k else false.

Example 1:
Input : nums = [1, 2, 3, 4, 5] , k = 8
Output : Yes
Explanation : The subsequences like [1, 2, 5] , [1, 3, 4] , [3, 5] sum up to 8.

Example 2:
Input : nums = [4, 3, 9, 2] , k = 10
Output : No
*/

function isSubsequenceWithSumK(nums, k, i = 0, sum = 0) {
  // base
  if (sum === k) return true;
  if (i >= nums.length) return false;

  // Pick
  let pick = isSubsequenceWithSumK(nums, k, i + 1, sum + nums[i]);

  // Not Pick
  let notPick = isSubsequenceWithSumK(nums, k, i + 1, sum);

  return pick || notPick;
}

// Test
console.log(isSubsequenceWithSumK([1, 2, 3, 4, 5], 8));
console.log(isSubsequenceWithSumK([4, 3, 9, 2], 10));
