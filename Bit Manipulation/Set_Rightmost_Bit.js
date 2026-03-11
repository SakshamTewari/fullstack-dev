/*
Given a positive integer n, set the rightmost unset (0) bit of its binary representation to 1 and return the resulting integer.
If all bits are already set, return the number as it is.

Input: n = 10 (binary: 1010)  
Output: 11 (binary: 1011)  
Explanation: The rightmost unset bit is the least significant bit (LSB). Setting it to 1 gives 1011 = 11.
*/

function setRightmostBit(n) {
  if ((n & (n + 1)) === 0) return n; // all bits are 1 already
  return n | (n + 1);
}

// Test
console.log(setRightmostBit(10));
