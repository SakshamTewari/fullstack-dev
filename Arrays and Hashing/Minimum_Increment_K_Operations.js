/*
You are given an array of n-elements, you have to find the number of operations needed to make all elements of array equal. 
Where a single operation can increment an element by k. If it is not possible to make all elements equal print -1.

Example : 

Input : arr[] = {4, 7, 19, 16},  k = 3
Output : 10

Input : arr[] = {4, 4, 4, 4}, k = 3
Output : 0

Input : arr[] = {4, 2, 6, 8}, k = 3
Output : -1
*/

function minIncrementKOperations(arr, k) {
  let operations = 0;
  const max = Math.max(...arr);

  for (let num of arr) {
    if ((max - num) % k !== 0) return -1;
    else {
      operations += (max - num) / k;
    }
  }
  return operations;
}

// Test
console.log(minIncrementKOperations([4, 7, 19, 16], 3));
