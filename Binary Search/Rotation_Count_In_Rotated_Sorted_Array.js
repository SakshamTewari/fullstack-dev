/*
Given a sorted array arr[] (in strictly increasing order) that has been right-rotated k times. 
A right rotation means the last element is moved to the first position, and the remaining elements are shifted one position to the right. 
Find the value of k the number of times the array was right-rotated from its originally sorted form.

Examples:

Input: arr[] = [15, 18, 2, 3, 6, 12]
Output: 2
Explanation: 
Original sorted array = [2, 3, 6, 12, 15, 18]
After 2 right rotations → [15, 18, 2, 3, 6, 12]  

Input: arr[] = [7, 9, 11, 12, 5]
Output: 4
Explanation: 
Original sorted array = [5, 7, 9, 11, 12]  
After 4 right rotations → [7, 9, 11, 12, 5]

Input: arr[] = [7, 9, 11, 12, 15]
Output: 0
Explanation: Array is already sorted, so k = 0  
*/

function countRotations(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // if already sorted
    if (arr[start] <= arr[end]) return start;

    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] > arr[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}

// Test
console.log(countRotations([7, 9, 11, 12, 5]));
