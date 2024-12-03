/*
Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
*/
var linearSearch = function (nums, x) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) return i;
  }
  return -1;
};

// console.log(linearSearch([1, 2, 3, 4, 5, 6], 4));
