/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 
Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let i = 0; i <= nums.length; i++) {
    if (set.has(i)) continue;
    else return i;
  }
};

// Using Gauss formula
function missingNumberGauss(nums) {
  let sum = 0;
  let n = nums.length;
  for (let num of nums) sum += num;

  let expSum = (n * (n + 1)) / 2;

  return expSum - sum;
}

/*
Given an unsorted array arr[] of size n, containing elements from the range 1 to n, it is known that one number in this range is missing, and another number occurs twice in the array.
Find both the duplicate number and the missing number.

Examples: 

Input: arr[] = [3, 1, 3]
Output: [3, 2]
Explanation: 3 is occurs twice and 2 is missing.

Input: arr[] = [4, 3, 6, 2, 1, 1]
Output: [1, 5] 
Explanation: 1 is occurs twice and 5 is missing.
*/

// Test
console.log(missingNumber([3, 0, 1]));
console.log(missingNumberGauss([3, 0, 1]));
