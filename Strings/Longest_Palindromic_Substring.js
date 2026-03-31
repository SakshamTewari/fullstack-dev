/*
Given a string s, return the longest substring which is a palindrome.

Input:  "babad"
Output: "bab" OR "aba"
*/

function longestSubstringPalindrome(s) {
  let maxLen = 0;
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    // odd length palindrome
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }

    // even length palindrome
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLen) {
        maxLen = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  return s.slice(start, start + maxLen);
}

// Test
console.log(longestSubstringPalindrome("babad"));
