/*
Given an array arr[] of integers, determine the Next Greater Element (NGE) for every element in the array, maintaining the order of appearance.

The Next Greater Element for an element x is defined as the first element to the right of x in the array that is strictly greater than x.
If no such element exists for an element, its Next Greater Element is -1.
Examples: 

Input: arr[] = [1, 3, 2, 4]
Output: [3, 4, 4, -1]
Explanation: The next larger element to 1 is 3, 3 is 4, 2 is 4 and for 4, since it doesn't exist, it is -1.

Input: arr[] = [6, 8, 0, 1, 3]
Output: [8, -1, 1, 3, -1]
Explanation: The next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 , for 1 it is 3 and then for 3 there is no larger element on right and hence -1.
*/

function nextGreaterElement(arr) {
  let stack = [];

  let result = new Array(arr.length).fill(-1);

  for (let i = arr.length - 1; i >= 0; i--) {
    // pop elements till greater element or stack empty
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    // after popping smaller elements, check if stack is not empty. if not, top element is the greater one
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }

    // push current element to stack
    stack.push(arr[i]);
  }

  return result;
}

// Test
console.log(nextGreaterElement([4, 5, 2, 25]));
