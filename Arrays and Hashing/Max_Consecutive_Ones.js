/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == 1) {
      let count = 1;
      while (nums[++i] == 1) {
        count++;
      }
      if (count > maxCount) maxCount = count;
    }
    i++;
  }
  return maxCount;
};

/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Input : nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0] , k = 3
Output : 10
Explanation : The maximum number of consecutive 1's are obtained only if we flip the 0's present at position 3, 4, 5 (0 base indexing).
The array after flipping becomes [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0].
The number of consecutive 1's is 10.
*/

function longestOnes(nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// Test

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 3));
