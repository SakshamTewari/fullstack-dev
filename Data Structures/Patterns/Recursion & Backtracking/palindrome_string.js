// GFG - https://www.geeksforgeeks.org/problems/palindrome-string0817/1

function checkPalindromeString(s, left = 0, right = s.length - 1) {
  if (left >= right) return true;

  if (s[left] !== s[right]) return false;

  return checkPalindromeString(s, left + 1, right - 1);
}

// Test

console.log(checkPalindromeString("abba"));
