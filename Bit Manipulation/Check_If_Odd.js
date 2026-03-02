/*
Given a non-negative integer n, determine whether it is odd. Return true if the number is odd, otherwise return false. A number is odd if it is not divisible by 2 (i.e., n % 2 != 0).
*/

// Using bit masking

function isOdd(n) {
  return (n & 1) === 1;
}

// Test
console.log(isOdd(12));
console.log(isOdd(13));
