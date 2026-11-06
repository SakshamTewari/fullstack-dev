/* 
Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.

Input Format: arr[] = {2,2,1}
Result: 1
Explanation: In this array, only the element 1 appear once and so it is the answer
*/

function singleNumber(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;
  }
  return result;
}
s;
/*
Given an array nums of length n, every integer in the array appears twice except for two integers. 
Identify and return the two integers that appear only once in the array. Return the two numbers in ascending order.

For example, if nums = [1, 2, 1, 3, 5, 2], the correct answer is [3, 5], not [5, 3].
*/

function singleNumbers(nums) {}
