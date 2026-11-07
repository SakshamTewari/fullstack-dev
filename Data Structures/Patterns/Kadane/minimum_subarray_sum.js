// https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1

function minimumSubarray(nums) {
  let ans = nums[0];
  let bestEnding = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let includeSum = bestEnding + nums[i];
    let currSum = nums[i];
    bestEnding = Math.min(includeSum, currSum);
    ans = Math.min(bestEnding, ans);
  }
  return ans;
}

// Test

console.log(minimumSubarray([3, -4, 2, -3, -1, 7, -5]));
