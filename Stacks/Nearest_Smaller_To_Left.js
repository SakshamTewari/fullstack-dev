/*
Given an array arr[], find the Previous Smaller Element (PSE) for every element in the array.

The Previous Smaller Element of an element x is defined as the first element to its left in the array that is smaller than x.
If no such element exists for a particular position, the PSE should be considered as -1.
 
Example: 

Input: arr[] = [1, 5, 0, 3, 4, 5]
Output: [-1, 1, -1, 0, 3, 4]
Explanation: 
For 1, no element on the left → -1
For 5, the previous smaller element is 1
For 0, no smaller element on the left → -1
For 3, the previous smaller element is 0
For 4, the previous smaller element is 3
For the last 5, the previous smaller element is 4
*/

function nearestSmallerToLeft(arr) {
  let stack = [];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }
    stack.push(arr[i]);
  }
  return result;
}

// Test
console.log(nearestSmallerToLeft([1, 5, 0, 3, 4, 5]));
