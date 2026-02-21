/*
Given an array where each element represents the maximum number of steps you can jump forward from that element, return true if we can reach the last index starting from the first index. 
Otherwise, return false.

Example 1:
Input:nums = [2, 3, 1, 0, 4]
Output: True           
Explanation: 
We start at index 0, with value 2 this means we can jump to index 1 or 2.
From index 1, with value 3, we can jump to index 2, 3, or 4. However, if we jump to index 2 with value 1, we can only jump to index 3.
So we jump to index 1 then index 4 reaching the end of the array.
Hence, we return true.

Example 2:
Input:nums = [3, 2, 1, 0, 4]
Output: False
Explanation: 
We start at index 0, with value 3 which means we can jump to index 1, 2, or 3.
From index 1, with value 2 we can only jump to index 2 or 3.
From index 2, with value 1 we can only jump to index 3.
From index 3, with value 0 we cannot jump any further.
Hence, from all possibilities we are unable to jump to the last index so we return false.
*/

function canJump(nums) {
  let maxReach = 0; // max index we can reach at any time

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}

/*
You are given a 0-indexed array nums of length n representing your maximum jump capability from each index.

You start at index 0. Each element nums[i] represents the maximum number of steps you can jump forward from index i.
Your goal is to reach the last index of the array (nums[n - 1]) using the minimum number of jumps
Return the minimum number of jumps required to reach the last index.
You can assume that it is always possible to reach the last index.
*/

function minJumps(nums) {
  let jumps = 0;
  let currentEndJump = 0;
  let maxReach = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= nums.length - 1) return jumps + 1;

    if (i === currentEndJump) {
      jumps++;
      currentEndJump = maxReach;
    }
  }
}

// Test
console.log(canJump([2, 3, 1, 0, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(minJumps([2, 3, 1, 1, 4]));
