/*
Given an array arr[], find the largest divisible subset in the given array. 
If there are multiple subsets of the largest size, return the lexicographically greatest one after sorting in ascending order.

Note: A subset is called divisible if for every pair (x, y) in the subset, either x divides y or y divides x.

Examples:

Input: arr[]  = [1, 16, 7, 8, 4]
Output: [1, 4, 8, 16]
Explanation: In the output subset, for every pair either the first element divides second or second divides first.

Input : arr[] = [2, 4, 3, 8]
Output : [2, 4,  8]
Explanation: In the output subset, for every pair either the first element divides second or second divides first.
*/

function largestDivisibleSubset(arr, memo = {}) {
  arr.sort((a, b) => a - b);
  const key = (i, prev) => `${i}-{${prev}}`;

  function dfs(i, prev) {
    if (i === arr.length) return [];

    if (key(i, prev) in memo) return memo[key(i, prev)];

    // skip current
    const skip = dfs(i + 1, prev);

    // pick
    let pick = [];
    if (prev === -1 || arr[i] % arr[prev] === 0) {
      pick = [arr[i], ...dfs(i + 1, i)];
    }
    memo[key(i, prev)] = pick.length > skip.length ? pick : skip;
    return memo[key(i, prev)];
  }

  return dfs(0, -1);
}

// Test
console.log(largestDivisibleSubset([1, 4, 8, 7, 16]));
