/*
A peak element is an element that is strictly greater than its neighbors.
Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
You must write an algorithm that runs in O(log n) time.

 
Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let n = nums.length;
  if (n == 1) {
    return 0;
  }
  if (nums[0] > nums[1]) {
    return 0;
  }
  if (nums[n - 1] > nums[n - 2]) {
    return n - 1;
  }

  // assuming it has just 1 peak
  let low = 1,
    high = n - 2;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    // peak is on the right
    else if (nums[mid] > nums[mid - 1]) {
      low = mid + 1;
    }
    // peak is on the left
    else if (nums[mid] > nums[mid + 1]) {
      high = mid - 1;
    }
    // to avoid infinite loop from [1,5,1,2,1], as (1 is not greater than 5 or 2)
    //just go right or left , doesn't matter
    else {
      //or hight = mid-1
      low = mid + 1;
    }
  }
  return 0;
};
