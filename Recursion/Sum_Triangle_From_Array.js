/*
Given an array of integers, print a sum triangle from it such that the first level has all array elements. 
From then, at each level number of elements is one less than the previous level and elements at the level is be the Sum of consecutive two elements in the previous level. 

Input : A = {1, 2, 3, 4, 5}
Output : [48]
         [20, 28] 
         [8, 12, 16] 
         [3, 5, 7, 9] 
         [1, 2, 3, 4, 5] 
*/

function printTriangle(arr) {
  if (arr.length === 0) return;

  if (arr.length === 1) {
    console.log(arr);
    return;
  }

  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] + arr[i + 1]);
  }

  printTriangle(newArr);
  console.log(arr);
}

// Test
printTriangle([1, 2, 3, 4, 5]);
