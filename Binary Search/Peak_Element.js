/*
Given an array arr[] where no two adjacent elements are same, find the index of a peak element. An element is considered to be a peak element if it is strictly greater than its adjacent elements. 
If there are multiple peak elements, return the index of any one of them.

Note: Consider the element before the first element and the element after the last element to be negative infinity.

Examples:

Input: arr[] = [1, 2, 4, 5, 7, 8, 3]
Output: 5
Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].

Input: arr[] = [10, 20, 15, 2, 23, 90, 80]
Output: 1
Explanation: Element 20 at index 1 is a peak since 10 < 20 > 15. Index 5 (value 90) is also a peak, but returning any one peak index is valid.
*/

function peakElement(arr) {
  if (arr.length === 1) {
    return 0;
  }

  if (arr[0] > arr[1]) {
    return 0;
  }

  if (arr[arr.length - 1] > arr[arr.length - 2]) {
    return arr.length - 1;
  }

  let left = 1,
    right = arr.length - 2;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    // if right side is bigger, peak might be there
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

// Test
console.log(peakElement([1, 2, 4, 5, 7, 8, 3]));
