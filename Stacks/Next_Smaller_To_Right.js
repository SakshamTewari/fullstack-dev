/*
Given an array arr[] of integers, find the Next Smaller Element (NSE) for each element in the array.

The Next Smaller Element of an element x is defined as the first element to the right of x in the array that is strictly smaller than x.
If no such element exists for a particular position, the NSE should be considered as -1.
Examples:

Input: arr[] = [4, 8, 5, 2, 25]
Output: [2, 5, 2, -1, -1]
Explanation: 
The first element smaller than 4 having index > 0 is 2.
The first element smaller than 8 having index > 1 is 5.
The first element smaller than 5 having index > 2 is 2.
There are no elements smaller than 2 having index > 3.
There are no elements smaller than 25 having index > 4.
*/

function nextSmallerToRight(arr) {
  let stack = [];
  let result = new Array(arr.length).fill(-1);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
}

// Test
console.log(nextSmallerToRight([4, 8, 5, 2, 25]));
