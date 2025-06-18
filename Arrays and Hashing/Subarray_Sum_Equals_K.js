/* 
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2

Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
*/

function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  let prefixSum = new Map();
  prefixSum.set(0, 1);

  for (let num of nums) {
    sum += num;

    if (prefixSum.has(sum - k)) {
      count += prefixSum.get(sum - k);
    }

    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }
  return count;
}

// Using sliding window (only works for non-negative integers here)
function subarraySumSliding(nums, k) {
  let count = 0;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > k) {
      sum -= nums[left];
      left++;
    }

    if (sum === k) {
      count++;
    }
  }
  return count;
}

// Test

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySumSliding([1, 1, 1], 2));
