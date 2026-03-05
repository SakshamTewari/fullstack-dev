/*
Given two integers a and b, swap them in-place using only 2 variables (without using a temporary variable).

Input: a = 5, b = 10
Output: a = 10, b = 5
*/

function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}

// Test
console.log(swap(5, 9));
