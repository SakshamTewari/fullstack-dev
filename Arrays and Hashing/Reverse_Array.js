/*
Reverse an array arr[]. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

Examples:

Input: arr[] = [1, 4, 3, 2, 6, 5]  
Output:  [5, 6, 2, 3, 4, 1]
Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.

Input: arr[] = [4, 5, 1, 2]
Output: [2, 1, 5, 4]
Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.
*/

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

// using Recursion
function reverseArrayRecursive(arr, left = 0, right = arr.length - 1) {
  // base case
  if (left >= right) return arr;

  [arr[left], arr[right]] = [arr[right], arr[left]];
  return reverseArrayRecursive(arr, left + 1, right - 1);
}

// Test
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayRecursive([1, 2, 3, 4, 5]));
