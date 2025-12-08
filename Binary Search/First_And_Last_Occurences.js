/*
Given a sorted array arr with possibly some duplicates, the task is to find the first and last occurrences of an element x in the given array.
Note: If the number x is not found in the array then return both the indices as -1

Input: arr[] = [1, 3, 5, 5, 5, 5, 67, 123, 125], x = 5
Output: [2, 5]
Explanation: First occurrence of 5 is at index 2 and last occurrence of 5 is at index 5
*/

function firstAndLast(arr, x) {
  return [firstOccurence(arr, x), lastOccurence(arr, x)];
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
console.log(firstAndLast([1, 3, 5, 5, 5, 5, 67, 123, 125], 5));
