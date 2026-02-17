/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.

Example 1:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 2:

Input: candidates = [2], target = 1
Output: []
*/

function combinationSum(candidates, target, i = 0, current = [], res = []) {
  // base
  if (target === 0) {
    res.push([...current]);
    return res;
  }

  // stop conditions
  if (i >= candidates.length || target < 0) return res;

  // Pick
  current.push(candidates[i]);
  combinationSum(candidates, target - candidates[i], i, current, res);
  current.pop(); // hacktrack

  // Not Pick
  combinationSum(candidates, target, i + 1, current, res);

  return res;
}

// Test
console.log(combinationSum([2, 3, 5], 8));
