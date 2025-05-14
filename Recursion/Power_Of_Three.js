/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.
*/

function isPowerOfThree(n) {
  if (n <= 0) return false;
  if (n === 1) return true;
  if (n % 3 !== 0) return false;

  return isPowerOfThree(n / 3);
}

// Test
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(27));
