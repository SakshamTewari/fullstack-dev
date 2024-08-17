/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let num = x;
  let sum = 0;

  while (num > 0) {
    sum = sum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  if (sum === x) {
    return true;
  }
  console.log(sum);
  return false;
};
