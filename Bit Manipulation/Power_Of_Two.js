/*
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

 
Example 1:

Input: n = 1
Output: true
Explanation: 2^0 = 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  //    if(Math.log(n) % Math.log(2) == 0)
  //     return true;
  //     return false;

  if (n == 0) return false;
  if (n == 1) return true;

  while (n % 2 == 0) {
    n = n / 2;

    if (n == 1) return true;
  }
  return false;
};

// Using Bit Mainpulation    8 = 1000 , 7 = 0111  8 & 7 = 0
function isPowerOfTwoBit(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

// Test
console.log(isPowerOfTwoBit(8));
console.log(isPowerOfTwoBit(7));
