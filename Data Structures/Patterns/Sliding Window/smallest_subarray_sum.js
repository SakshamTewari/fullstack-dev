// Leetcode-209

//O(n)
function minimumSubarraySum(nums, target) {
  let firing = 0,
    hiring = 0,
    minLen = Infinity;
  let sum = 0;

  while (hiring < nums.length) {
    sum = sum + nums[hiring];

    // if you reach/cross the target, start firing
    while (sum >= target) {
      minLen = Math.min(minLen, hiring - firing + 1);
      sum = sum - nums[firing]; // subtract from firing because we have already checked from firing side
      firing++;
    }

    hiring++;
  }
  return minLen === Infinity ? 0 : minLen;
}

// O(n2)
function minimumSubarraySumBrute(nums, target) {
  let i = 0;
  let minLen = Infinity;

  while (i < nums.length) {
    let sum = 0;
    let j = i;
    while (j < nums.length) {
      let currLen = j - i + 1;
      sum = sum + nums[j];

      if (sum >= target) {
        minLen = Math.min(minLen, currLen);
      }
      j++;
    }
    i++;
  }

  return minLen == Infinity ? 0 : minLen;
}

// Test

console.log(minimumSubarraySum([2, 3, 1, 2, 4, 3], 7));
console.log(minimumSubarraySum([1, 1, 1, 1, 1, 1, 1, 1], 11));
console.log(minimumSubarraySumBrute([2, 3, 1, 2, 4, 3], 7));
console.log(minimumSubarraySumBrute([1, 1, 1, 1, 1, 1, 1, 1], 11));
