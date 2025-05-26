/*
Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.

Example :

Input: nums = [2,2,1]
Output: 1
*/

function singleNumber(nums) {
  let result = new Set();
  for (let num of nums) {
    if (result.has(num)) {
      result.delete(num);
    } else {
      result.add(num);
    }
  }
  return [...result][0]; // converts the Set into an array by spreading its elements into a new array.
}

// Test

console.log(singleNumber([2, 2, 1])); // Output: 1
