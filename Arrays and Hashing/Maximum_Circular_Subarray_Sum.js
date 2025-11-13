/*
Given a circular array arr[], find the maximum sum of any non-empty subarray. A circular array allows wrapping from the end back to the beginning.
Note: A subarray may wrap around the end and continue from the beginning, forming a circular segment.

Examples: 

Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
Output: 22
Explanation: The circular subarray [12, 8, -8, 9, -9, 10] gives the maximum sum, which is 22.

Input: arr[] = [4, -1, -2, 3]
Output: 7
Explanation: The circular subarray [3, 4] gives the maximum sum of 7.

Input: arr[] = [5, -2, 3, 4]
Output: 12
Explanation: The circular subarray [3, 4, 5] gives the maximum sum of 12.
*/

// Brute force  O(n^2) Time , O(1) Space
function maxCircularSum(arr) {
  const n = arr.length;
  let res = arr[0];

  for (let i = 0; i < n; i++) {
    let currSum = 0;

    for (let j = 0; j < n; j++) {
      currSum += arr[(i + j) % n];
      res = Math.max(res, currSum);
    }
  }
  return res;
}

// Kadane's algorithm O(n) time, O(1) space
function maxCircularSumKadane(arr) {
  let totalSum = 0;
  let currMaxSum = 0,
    currMinSum = 0;
  let maxSum = arr[0],
    minSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // Kadane to find max subarray sum
    currMaxSum = Math.max(currMaxSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currMaxSum);

    // Kadane to find min subarray sum
    currMinSum = Math.min(currMinSum + arr[i], arr[i]);
    minSum = Math.min(minSum, currMinSum);

    totalSum += arr[i];
  }

  let circularSum = totalSum - minSum;

  if (minSum === totalSum) {
    return maxSum;
  }
  return Math.max(maxSum, circularSum);
}

// Test
console.log(maxCircularSum([8, -8, 9, -9, 10, -11, 12]));
console.log(maxCircularSumKadane([8, -8, 9, -9, 10, -11, 12]));
