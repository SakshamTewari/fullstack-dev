// Leetcode-53

function maximumSubarray(nums) {
  let ans = nums[0];
  let bestEnding = nums[0];

  for (i = 1; i < nums.length; i++) {
    let includeSum = bestEnding + nums[i];
    let currSum = nums[i];
    bestEnding = Math.max(includeSum, currSum);
    ans = Math.max(ans, bestEnding);
  }
  return ans;
}

// Test

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
