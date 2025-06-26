/*
You are given an integer array nums consisting of n elements, and an integer k.
Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
 Any answer with a calculation error less than 10-5 will be accepted.

 
Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:

Input: nums = [5], k = 1
Output: 5.00000
*/

function findMaxAverage(nums, k) {
  let left = 0,
    right = 0;
  let windowSum = 0;

  while (right < k) {
    windowSum += nums[right];
    right++;
  }
  let maxSum = windowSum;

  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right] - nums[left];
    maxSum = Math.max(maxSum, windowSum);
    left++;
  }

  return maxSum / k;
}

// Test

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
