/*
Given an array arr[] of length N and an integer target. You want to build an expression out of arr[] by adding one of the symbols '+' and '-' before each integer in arr[] and then concatenate all the integers.
Return the number of different expressions that can be built, which evaluates to target.

Example: 

Input : N = 5, arr[] = {1, 1, 1, 1, 1}, target = 3
Output: 5
Explanation:
There are 5 ways to assign symbols to 
make the sum of array be target 3.


-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3


Input: N = 1, arr[] = {1}, target = 1
Output: 1
*/

function targetSumMemoization(arr, target, i = 0, memo = {}) {
  // base case
  if (i === arr.length) {
    return target === 0 ? 1 : 0;
  }

  const key = `${i} - ${target}`;

  if (key in memo) {
    return memo[key];
  }

  memo[key] =
    targetSumMemoization(arr, target - arr[i], i + 1, memo) +
    targetSumMemoization(arr, target + arr[i], i + 1, memo);
  return memo[key];
}

// Using recursion

function targetSumRecursion(arr, target, i = 0) {
  // base case
  if (i === arr.length) {
    return target === 0 ? 1 : 0;
  }

  // return TOTAL count of 2 cases : adding +ve and -ve sign before current element respectively
  return (
    targetSumRecursion(arr, target - arr[i], i + 1) +
    targetSumRecursion(arr, target + arr[i], i + 1)
  );
}

// Test
console.log(targetSumMemoization([1, 1, 1, 1, 1], 3));
console.log(targetSumRecursion([1, 1, 1, 1, 1], 3));
