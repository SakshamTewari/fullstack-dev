// Leetcode-1004

function maximumConsecutiveOnes(nums, k) {
  let low = 0;
  let maxLen = 0;
  let freq = new Array(2).fill(0);

  for (let high = 0; high < nums.length; high++) {
    freq[nums[high]]++;

    // adjust;
    while (high - low + 1 - freq[1] > k) {
      let leftNum = nums[low];
      freq[leftNum]--;
      low++;
    }

    maxLen = Math.max(maxLen, high - low + 1);
  }
  return maxLen;
}

// Test

console.log(maximumConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
