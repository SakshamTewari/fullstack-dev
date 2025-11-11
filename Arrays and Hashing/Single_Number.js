/*
Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.

Example :

Input: nums = [2,2,1]
Output: 1
*/

function singleNumberSet(nums) {
  let result = new Set();
  for (let num of nums) {
    if (result.has(num)) {
      result.delete(num);
    } else {
      result.add(num);
    }
  }
  return [...result][0]; // converts the Set into an array by spreading its elements into a new array.
}

// Using XOR
function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

// Using Hashmap
function singleNumberHashMap(nums) {
  const numCount = new Map();
  for (let num of nums) {
    numCount.set(num, (numCount.get(num) || 0) + 1);
  }

  for (let [num, count] of numCount) {
    if (count === 1) return num;
  }
  return -1;
}

// Test
console.log(singleNumber([1, 1, 2, 2, 3]));
console.log(singleNumberHashMap([1, 2, 2, 4, 3, 4, 3]));
console.log(singleNumberSet([2, 2, 1]));
