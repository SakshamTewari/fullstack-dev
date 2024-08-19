/*
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
Given an integer n, return true if n is an ugly number.

 Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;

  for (const p of [2, 3, 5]) while (n % p == 0) n = n / p;
  return n == 1;
};
