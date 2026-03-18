/*
Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.
The lower bound is the smallest index, ind, where arr[ind] >= x. But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.

Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
Result: 1
Explanation: Index 1 is the smallest index such that arr[1] >= x.
*/

function lowerBound(arr, target) {
  let low = 0,
    high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

/*
Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.
The upper bound is the smallest index, ind, where arr[ind] > x.

Input Format: N = 4, arr[] = {1,2,2,3}, x = 2
Result: 3
Explanation: Index 3 is the smallest index such that arr[3] > x.
*/

function upperBound(arr, target) {
  let low = 0,
    high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

// Test
console.log(lowerBound([1, 3, 3, 5, 7], 3));
console.log(upperBound([1, 3, 3, 5, 7], 3));
