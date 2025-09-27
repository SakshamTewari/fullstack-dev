/*
Given an array arr[]  and a positive integer k, find the first negative integer for each and every window(contiguous subarray) of size k.

Note: If a window does not contain a negative integer, then return 0 for that window.

Examples:

Input: arr[] = [-8, 2, 3, -6, 10] , k = 2
Output: [-8, 0, -6, -6]
Explanation:
Window [-8, 2] First negative integer is -8.
Window [2, 3] No negative integers, output is 0.
Window [3, -6] First negative integer is -6.
Window [-6, 10] First negative integer is -6.
*/

function first_negative_number(arr, k) {
  let result = [];
  let negatives = []; // store indices of negative number
  let i = 0,
    j = 0;

  while (j < arr.length) {
    if (arr[j] < 0) negatives.push(arr[j]);

    // reach the window size
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      // window size reached
      if (negatives.length > 0) {
        result.push(negatives[0]); // element of 1st index in negatives
      } else {
        result.push(0);
      }

      // Slide the window
      if (arr[i] < 0) {
        negatives.shift();
      }
      i++;
      j++;
    }
  }
  return result;
}

// Test
console.log(first_negative_number([-8, 2, 3, -6, 10], 2));
