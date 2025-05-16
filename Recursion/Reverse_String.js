/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. (Recursion)
But, iterative version is more memory-efficient (no call stack growth).

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

function reverseString(s, i = 0, j = s.length - 1) {
  if (i >= j) return;
  [s[i], s[j]] = [s[j], s[i]];

  reverseString(s, i + 1, j - 1);

  return s;
}

// Test
console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
