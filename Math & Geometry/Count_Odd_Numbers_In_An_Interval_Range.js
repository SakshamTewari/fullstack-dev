/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
*/
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var countOdds = function (low, high) {
  let count = 0;
  while (low <= high) {
    if (low % 2 !== 0) count++;
    low++;
  }

  return count;
};
