/*
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
*/

function subsetsUsingSimpleRecursion(nums, output = [], i = 0) {
  if (i === nums.length) return [output];

  // exclude current
  let left = subsetsUsingSimpleRecursion(nums, output, i + 1);

  // include current (make a fresh copy)
  let right = subsetsUsingSimpleRecursion(nums, [...output, nums[i]], i + 1);

  return [...left, ...right];
}

// Test
console.log(subsetsUsingSimpleRecursion([1, 2, 3]));

function subsetsUsingBacktrack(nums, output = [], i = 0, res = []) {
  if (i === nums.length) {
    res.push([...output]);
    return res;
  }

  // choice 1: dont include nums[i]
  subsetsUsingBacktrack(nums, output, i + 1, res);

  // choice 2 : include nums[i]
  output.push(nums[i]);
  subsetsUsingBacktrack(nums, output, i + 1, res);
  output.pop(); // backtrack

  return res;
}

// Test
console.log(subsetsUsingBacktrack([1, 2, 3]));
