/*
Given a sorted array of distinct positive integers arr[] and an integer k, find the kth positive integer that is missing from the array.

Examples : 

Input: arr[] = [2, 3, 4, 7, 11], k = 5
Output: 9
Explanation: Missing are 1, 5, 6, 8, 9, 10, ... and 5th missing number is 9.

Input: arr[] = [1, 2, 3], k = 2
Output: 5
Explanation: Missing are 4, 5, 6.... and 2nd missing number is 5.

Input: arr[] = [3, 5, 9, 10, 11, 12], k = 2
Output: 2
Explanation: Missing are 1, 2, 4, 6, 7, 8, 13,...  and 2nd missing number is 2.
*/

/*
The idea is based on the observation that in a perfect sequence without missing numbers, the i-th element should be i + 1. If any number is missing, then arr[i] becomes greater than i + 1, and the number of missing elements before arr[i] is arr[i] - (i + 1).
So, at each index i, we check if the number of missing elements so far is at least k. The first index where arr[i] > k + i indicates that the k-th missing number is before that index and equals k + i.
If no such index is found, it means the k-th missing number lies beyond the last element and is simply k + n.
*/

//[O(n) time, O(1) space]
function kthMissingIndex(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k + i) {
      return k + i;
    }
  }

  // if all present in 1-n
  return k + arr.length;
}

//[O(logn) time, O(1) space]
function kthMissingBinary(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  let result = arr.length + k;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > mid + k) {
      result = mid + k;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

// Test
console.log(kthMissingIndex([3, 5, 9, 10, 11, 12], 2));
console.log(kthMissingBinary([3, 5, 9, 10, 11, 12], 2));
