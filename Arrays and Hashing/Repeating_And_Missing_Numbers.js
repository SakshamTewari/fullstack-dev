/*
Given an integer array nums of size n containing values from [1, n] and each value appears exactly once in the array, except for A, which appears twice and B which is missing.
Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.

Note: You are not allowed to modify the original array.

Input:nums = [3, 5, 4, 1, 1]  
Output:[1, 2]  
Explanation:1 appears twice in the array, and 2 is missing from the array. So the output is [1, 2].
*/

// Brute force

function findErrorNums(nums) {
  let result = [];

  for (let i = 1; i <= nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === i) count++;
    }
    if (count === 2) result[0] = i;
    else if (count === 0) result[1] = i;
  }
  return result;
}

// Better approach using Hash Array

function findErrorNumsHashArray(nums) {
  let hashArray = new Array(nums.length + 1).fill(0);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    hashArray[nums[i]]++;
  }

  for (let i = 1; i < hashArray.length; i++) {
    if (hashArray[i] === 2) result[0] = i;
    else if (hashArray[i] === 0) result[1] = i;
  }
  return result;
}

// Sum and Sum of squares

function findErrorNumsSum(nums) {
  let n = nums.length;
  let actualSum = 0,
    actualSqSum = 0;

  for (let num of nums) {
    actualSum += num;
    actualSqSum += num * num;
  }

  let expectedSum = (n * (n + 1)) / 2;
  let expectedSqSum = (n * (n + 1) * (2 * n + 1)) / 6;

  // x-y
  let diff = actualSum - expectedSum;
  // x^2 - y^2
  let sqDiff = actualSqSum - expectedSqSum;

  // x+y
  let sum = sqDiff / diff;

  let repeating = (diff + sum) / 2;
  let missing = sum - repeating;

  return [repeating, missing];
}

// Test
const nums = [3, 1, 2, 5, 4, 6, 7, 5];
console.log(findErrorNums(nums));
console.log(findErrorNumsHashArray(nums));
console.log(findErrorNumsSum(nums));
