/*
Given a sorted array arr[] of infinite numbers. The task is to search for an element k in the array.

Examples:

Input: arr[] = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], k = 10
Output: 4
Explanation: 10 is at index 4 in array.

Input: arr[] = [2, 5, 7, 9], k = 3
Output: -1
Explanation: 3 is not present in array.
*/

function positionInInfiniteArray(arr, target) {
  let start = 0;
  let end = 1;

  // fixing the range
  while (end < arr.length && arr[end] < target) {
    start = end;
    end = end * 2;
  }

  if (end >= arr.length) {
    end = arr.length - 1;
  }

  // binary search in the found range
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// Test
console.log(
  positionInInfiniteArray([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], 10)
);
