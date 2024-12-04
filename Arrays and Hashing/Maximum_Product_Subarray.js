/*
Given an integer array nums, find a subarraythat has the largest product, and return the product.
The test cases are generated so that the answer will fit in a 32-bit integer.

 Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) return 0;

  let maxProd = nums[0];
  let minProd = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // If the current number is negative, swap maxProd and minProd
    if (nums[i] < 0) {
      [maxProd, minProd] = [minProd, maxProd];
    }

    // Calculate the maximum and minimum products up to the current number
    maxProd = Math.max(nums[i], nums[i] * maxProd);
    minProd = Math.min(nums[i], nums[i] * minProd);

    // Update the result with the maximum product found so far
    result = Math.max(result, maxProd);
  }

  return result;
};
