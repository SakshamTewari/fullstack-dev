// Leetcode-1480

function runningSum(nums) {
  let pre = [];
  pre[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    pre[i] = pre[i - 1] + nums[i];
  }
  return pre;
}

// Test

console.log(runningSum([1, 2, 3, 4]));
