/*
Given an integer n, return the number of set bits (1s) in its binary representation.
Can you solve it in O(log n) time complexity?

Input: n = 5
Output:2
Explanation: The binary representation of 5 is 101, which has 2 set bits.
*/

function countSetBits(n) {
  let count = 0;

  while (n > 0) {
    count += n & 1; // increment count if least significant bit is 1
    n = n >> 1;
  }
  return count;
}

// Test
console.log(countSetBits(8));
