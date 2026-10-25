// GFG - https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1

function maxSubarraySumK(nums, k) {
  let i = 0,
    j = k - 1;

  let sum = 0;
  let temp = i;

  while (temp <= j) {
    sum += nums[temp];
    temp++;
  }

  let maxSum = sum;

  while (j < nums.length - 1) {
    let currSum = sum - nums[i] + nums[j + 1];
    j++;
    i++;

    maxSum = Math.max(maxSum, currSum);
    sum = currSum;
  }
  return maxSum;
}

// Test
let nums = [2, 1, 5, 1, 3, 2];
let k = 3;

console.log(maxSubarraySumK(nums, k));
