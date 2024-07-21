/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 Example 1:

Input: s = "aba"
Output: true
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] == s[end]) {
      start++;
      end--;
    } else if (s[start] != s[end]) {
      return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
    }
  }
  return true;
};

// // Helper function to check if a substring is a palindrome
function isPalindrome(s, left, right) {
  while (left <= right) {
    if (s[left] != s[right]) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
}
