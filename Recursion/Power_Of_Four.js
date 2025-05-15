/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
*/

function isPowerOfFour(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  if (n % 4 !== 0) return false;

  return isPowerOfFour(n / 4);
}

// Test
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(8));
