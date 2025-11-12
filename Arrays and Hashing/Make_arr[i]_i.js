/*
Given an array of elements of length n, ranging from 0 to n - 1. All elements may not be present in the array. 
If the element is not present then there will be -1 present in the array. Rearrange the array such that arr[i] = i and if i is not present, display -1 at that place.

Examples: 

Input: arr[] = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
Output: [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]
Explanation: In range 0 to 9, all except 0, 5, 7 and 8 are present. Hence, we print -1 instead of them.

Input: arr[] = [0, 1, 2, 3, 4, 5] 
Output: [0, 1, 2, 3, 4, 5]
Explanation: In range 0 to 5, all number are present.
*/

function modifyArray(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] !== -1 && arr[i] !== i) {
      let currentIndex = arr[i];
      [arr[i], arr[currentIndex]] = [arr[currentIndex], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
}

// Test
console.log(modifyArray([-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]));
