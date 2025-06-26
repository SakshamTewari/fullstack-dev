/*
Given a string s and an integer k, find the length of the longest substring that contains at most k distinct characters.

Example:
For s = "eceba" and k = 2, the answer is 3 ("ece").
*/

function longestSubstringKDistinct(s, k) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    map.set(char, (map.get(char) || 0) + 1);

    // shrink window if distinct char > k
    while (map.size > k) {
      const leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);

      if (map.get(leftChar) === 0) map.delete(leftChar);

      left++;
    }

    // Update max window length

    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
    }
  }

  return maxLen;
}

// Test

console.log(longestSubstringKDistinct('eceba', 2));
