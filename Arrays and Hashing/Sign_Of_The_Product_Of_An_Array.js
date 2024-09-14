/*
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

 
Example 1:

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sign = 1;

  for (let num of nums) {
    if (num === 0) return 0; // If there's a zero, the product is zero.
    if (num < 0) sign = -sign; // Flip the sign for each negative number.
  }

  return sign;
};

// ===========================================

var arraySign = function (nums) {
  let prod = 1;
  for (let num of nums) {
    if (num == 0) return 0;
    prod *= num;
  }
  return prod > 0 ? 1 : -1;
};
