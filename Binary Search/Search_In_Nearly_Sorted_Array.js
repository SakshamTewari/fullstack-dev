/*
Given a sorted integer array arr[] consisting of distinct elements, where some elements of the array are moved to either of the adjacent positions, i.e. arr[i] may be present at arr[i-1] or arr[i+1].
Given an integer target.  You have to return the index ( 0-based ) of the target in the array. If target is not present return -1.

Examples : 

Input: arr[] =  [10, 3, 40, 20, 50, 80, 70], target = 40
Output: 2 
Explanation: Output is index of 40 in given array i.e. 2

Input: arr[] =  [10, 3, 40, 20, 50, 80, 70], target = 90
Output: -1
Explanation: 90 is not present in the array.
*/

function searchInNearlySorted(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    // check middle 3 positions
    if (arr[mid] === target) return mid;
    if (mid > left && arr[mid - 1] === target) return mid - 1;
    if (mid < right && arr[mid + 1] === target) return mid + 1;

    // search in left half
    if (arr[mid] > target) {
      right = mid - 2;
    } else {
      left = mid + 2;
    }
  }
  return -1;
}

// Test
console.log(searchInNearlySorted([10, 3, 40, 20, 50, 80, 70], 40));
