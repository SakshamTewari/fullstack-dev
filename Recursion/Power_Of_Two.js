/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
*/

function isPowerOfTwo(n) {
  if (n <= 0) return false;
  if (n === 1) return true; // should come before checking if even, otherwise will give wrong answers
  if (n % 2 !== 0) return false;

  return isPowerOfTwo(n / 2);
}

// Test
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(32));
