/*
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

function lengthOfLongestSubstring(s) {
  let map = {};
  let maxLen = 0,
    left = 0;

  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] !== undefined && map[s[right]] >= left)
      left = map[s[right]] + 1;

    map[s[right]] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// Test

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
