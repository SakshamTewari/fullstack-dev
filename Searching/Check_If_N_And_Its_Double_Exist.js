/*
Given an array arr of integers, check if there exist two indices i and j such that :

Input: arr = [10,2,5,3]
Output: true

Input: arr = [3,1,7,11]
Output: false
*/

function checkIfExist(arr) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(2 * num)) return true;
    else if (num % 2 === 0 && set.has(num / 2)) return true;
    else set.add(num);
  }
  return false;
}

// Test

console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([10, 2, 5, 3]));
