// Leetcode-560

function subarraySum(nums, k) {
  let count = 0;
  let prefixSum = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    let remaining = prefixSum - k;

    if (map.has(remaining)) {
      count += map.get(remaining);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}

// Test

console.log(subarraySum([1, 2, 3, -2, 2], 3));
