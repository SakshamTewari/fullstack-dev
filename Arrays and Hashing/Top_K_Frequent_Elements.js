/*
Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

// Frequency map + bucket Sort
function topKFrequent(nums, k) {
  const freqMap = new Map();

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const buckets = Array(nums.length + 1)
    .fill()
    .map(() => []);
  for (let [num, freq] of freqMap.entries()) {
    buckets[freq].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (let num of buckets[i]) {
      result.push(num);
      if (result.length === k) return result;
    }
  }
}

// Test
console.log(topKFrequent([1, 1, 1, 2, 2, 4], 2));
