/*
Given two strings, s1 and s2, the task is to find the length of the Longest Common Subsequence. 
If there is no common subsequence, return 0. A subsequence is a string generated from the original string by deleting 0 or more characters, without changing the relative order of the remaining characters.

For example, subsequences of "ABC" are "", "A", "B", "C", "AB", "AC", "BC" and "ABC". In general, a string of length n has 2n subsequences.

Examples:

Input: s1 = "ABC", s2 = "ACD"
Output: 2
Explanation: The longest subsequence which is present in both strings is "AC".

Input: s1 = "AGGTAB", s2 = "GXTXAYB"
Output: 4
Explanation: The longest common subsequence is "GTAB".

Input: s1 = "ABC", s2 = "CBA"
Output: 1
Explanation: There are three longest common subsequences of length 1, "A", "B" and "C".
*/

function longestCommonSubsequenceMemoization(
  s1,
  s2,
  m = s1.length,
  n = s2.length,
  memo = {},
) {
  // base case
  if (m === 0 || n === 0) return 0;

  const key = `${m}-${n}`;
  if (key in memo) return memo[key];

  // if match
  if (s1[m - 1] === s2[n - 1]) {
    memo[key] =
      1 + longestCommonSubsequenceMemoization(s1, s2, m - 1, n - 1, memo);
    return memo[key];
  }
  // if not match
  memo[key] = Math.max(
    longestCommonSubsequenceMemoization(s1, s2, m, n - 1, memo),
    longestCommonSubsequenceMemoization(s1, s2, m - 1, n, memo),
  );
  return memo[key];
}

function longestCommonSubsequenceRecursion(
  s1,
  s2,
  m = s1.length,
  n = s2.length,
) {
  // base case
  if (m === 0 || n === 0) return 0;

  // if characters match
  if (s1[m - 1] === s2[n - 1]) {
    return 1 + longestCommonSubsequenceRecursion(s1, s2, m - 1, n - 1);
  }
  // if characters don't match
  return Math.max(
    longestCommonSubsequenceRecursion(s1, s2, m, n - 1),
    longestCommonSubsequenceRecursion(s1, s2, m - 1, n),
  );
}

// Test
console.log(longestCommonSubsequenceMemoization('AGGTAB', 'GXTXAYB'));
console.log(longestCommonSubsequenceRecursion('AGGTAB', 'GXTXAYB'));
