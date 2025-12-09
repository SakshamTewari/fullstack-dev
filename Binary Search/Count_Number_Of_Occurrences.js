/*
Given a sorted array arr[] and an integer target, find the number of occurrences of target in given array.

Examples:

Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 2
Output: 4
Explanation: 2 occurs 4 times in the given array.

Input: arr[] = [1, 1, 2, 2, 2, 2, 3], target = 4
Output: 0
Explanation: 4 is not present in the given array.
*/

function countNumberOfOccurence(arr, x) {
  return lastOccurence(arr, x) - firstOccurence(arr, x) + 1;
}

function firstOccurence(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === x) {
      result = mid;
      end = mid - 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

function lastOccurence(arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === x) {
      result = mid;
      start = mid + 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

// Test
console.log(countNumberOfOccurence([1, 1, 2, 2, 2, 2, 3], 2));
