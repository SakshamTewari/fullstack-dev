/*
Given an array arr[], sort the array according to the following relations:  

arr[i] >= arr[i - 1], if i is even, ∀ 1 <= i < n
arr[i] <= arr[i - 1], if i is odd, ∀ 1 <= i < n
Find the resultant array.[consider 1-based indexing]

Examples:  

Input: arr[] = [1, 2, 2, 1]
Output: [1 2 1 2]
 Explanation:
For i = 2, arr[i] >= arr[i-1]. So, 2 >= 1.
For i = 3, arr[i] <= arr[i-1]. So, 1 <= 2.
For i = 4, arr[i] >= arr[i-1]. So, 2 >= 1.

Input: arr[] = [1, 3, 2]
Output: [1 3 2]
Explanation: 
*/

function evenPositionedGreater(arr) {
  arr.sort((a, b) => a - b);

  const result = [];
  let start = 0,
    end = arr.length - 1;

  for (let k = 0; k < arr.length; k++) {
    if ((k + 1) % 2 === 0) {
      result[k] = arr[end];
      end--;
    } else {
      result[k] = arr[start++];
    }
  }
  return result;
}

// Test
console.log(evenPositionedGreater([1, 2, 2, 1]));
