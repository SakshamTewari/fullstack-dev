/*
Given a sorted array and a value x, find the element of the floor of x. 
The floor of x is the largest element in the array smaller than or equal to x.

Examples:

Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 5
Output: 1
Explanation: Largest number less than or equal to 5 is 2, whose index is 1

Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 20
Output: 6
Explanation: Largest number less than or equal to 20 is 19, whose index is 6

Input : arr[] = [1, 2, 8, 10, 10, 12, 19], x = 0
Output : -1
Explanation: Since floor doesn't exist, output is -1.
*/

function floorOfElement(arr, x) {
  let start = 0,
    end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) {
      result = mid; //potential floor
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

// Test
console.log(floorOfElement([1, 2, 8, 10, 10, 12, 19], 5));
