/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// Using HashMap
var majorityElement = function (nums) {
  let frequencyMap = new Map();
  for (let num of nums) {
    if (frequencyMap.has(num)) {
      frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
      frequencyMap.set(num, 1);
    }
  }
  for (let [key, value] of frequencyMap) {
    if (value > nums.length / 2) {
      return key;
    }
  }
  return 0;
};

// Using Sorting
function majorityElementSorting(nums) {
  nums.sort((a, b) => a - b);

  let candidate = nums[Math.floor(nums.length / 2)];

  let count = 0;
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }

  if (count > Math.floor(nums.length / 2)) return candidate;
  else return -1;
}

// Using Moore's Voting Algorithm  [O(n) time, O(1) space]
/*
Imagine you are voting:

Every time you see the same number, you increase its count.
When you see a different number, you cancel out one vote.
Majority element will survive all cancellations because it appears more than others.

You end with 1 candidate, which must be the majority.
 */
function majorityElementMoore(nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // verify candidate: only required when majority element is not gauranteed to exist
  // else just return candidate
  let freq = 0;
  for (let num of nums) {
    if (num === candidate) freq++;
  }

  return freq > nums.length / 2 ? candidate : -1;
}

// Test
console.log(majorityElement([1, 1, 2, 1, 3, 5, 1]));
console.log(majorityElementSorting([1, 1, 2, 1, 3, 5, 1]));
console.log(majorityElementMoore([1, 1, 2, 1, 3, 5, 1]));
