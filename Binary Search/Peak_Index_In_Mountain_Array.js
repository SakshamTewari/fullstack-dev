/*
You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
Return the index of the peak element.
Your task is to solve it in O(log(n)) time complexity.

Example 1:

Input: arr = [0,1,0]
Output: 1

Example 2:

Input: arr = [0,2,1,0]
Output: 1

*/

function peakIndexInMountainArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] < arr[mid + 1]) {
      // Peak is to the right
      left = mid + 1;
    } else {
      // Peak is at mid or to the left
      right = mid;
    }
  }
  return left;
}

// Test

console.log(peakIndexInMountainArray([0, 1, 2]));
console.log(peakIndexInMountainArray([0, 1, 0]));
