/*
Given an infinite sorted array consisting 0s and 1s. 
The problem is to find the index of first ‘1’ in that array. As the array is infinite, therefore it is guaranteed that number '1' will be present in the array.

Examples:

Input : arr[] = {0, 0, 1, 1, 1, 1} 
Output : 2

Input : arr[] = {1, 1, 1, 1,, 1, 1}
Output : 0
*/

function firstOne(arr) {
  let start = 0,
    end = 1;
  let result = -1;

  while (arr[end] === 0) {
    start = end;
    end = end * 2;
  }

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === 1) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}

// Test
console.log(firstOne([0, 0, 1, 1, 1, 1]));
