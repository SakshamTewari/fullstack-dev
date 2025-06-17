/*
Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively.
All other sub-arrays of size 3 have averages less than 4 (the threshold).

Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. 
Note that averages are not integers.
*/

function numOfSubarrays(arr, k, threshold) {
  const targetSum = k * threshold;
  let sum = 0,
    count = 0;

  // First window
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  if (sum >= targetSum) {
    count++;
  }

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    if (sum >= targetSum) {
      count++;
    }
  }
  return count;
}

// Test
console.log(numOfSubarrays([2, 1, 3, 4, 1], 3, 3));
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 15));
