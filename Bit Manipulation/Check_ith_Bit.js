/*
Given two integers n and i, return true if the ith bit in the binary representation of n (counting from the least significant bit, 0-indexed) is set (i.e., equal to 1).
Otherwise, return false.

Input: n = 5, i = 0
Output: true
Explanation: Binary representation of 5 is 101. The 0-th bit from LSB is set (1).

Input: n = 10, i = 1
Output: true
Explanation: Binary representation of 10 is 1010. The 1-st bit from LSB is set (1).

*/

function isIthBitSet(n, i) {
  return (n & (1 << i)) !== 0;
}

// Test
console.log(isIthBitSet(10, 1));
console.log(isIthBitSet(10, 2));
