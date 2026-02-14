/*
Implement the power function pow(x, n) , which calculates the x raised to n i.e. xn.
*/
function pow(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) return 1 / pow(x, -n);

  if (n % 2 === 0) {
    return pow(x * x, Math.floor(n / 2));
  }
  return x * pow(x * x, Math.floor(n / 2));
}

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

// Test
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(8));

// Test
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(32));

// Test
console.log(pow(2, 4));
console.log(pow(2, -2));
