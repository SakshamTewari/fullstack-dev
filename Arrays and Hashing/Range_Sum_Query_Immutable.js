/*
Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

Example 1:

Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]


*/
var NumArray = function (nums) {
  this.prefixSum = [];
  let sum = 0;
  for (let num of nums) {
    sum += num;
    this.prefixSum.push(sum);
  }
};

NumArray.prototype.sumRange = function (left, right) {
  let rightSum = this.prefixSum[right];
  let leftSum = left > 0 ? this.prefixSum[left - 1] : 0;
  return rightSum - leftSum;
};

// Test

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
