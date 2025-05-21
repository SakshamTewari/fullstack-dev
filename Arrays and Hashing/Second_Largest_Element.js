/*
Given an array of integers nums, return the second-largest element in the array. 
If the second-largest element does not exist, return -1.

Input: nums = [8, 8, 7, 6, 5]
Output: 7
*/

function secondLargest(arr) {
  let max = arr[0],
    secondMax = -1;
  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }
  return secondMax;
}

console.log(secondLargest([8, 8, 7, 6, 5]));
