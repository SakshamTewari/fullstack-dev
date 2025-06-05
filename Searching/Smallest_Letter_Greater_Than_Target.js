/*
You are given an array of characters letters that is sorted in non-decreasing order, and a character target. 
There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. 
If such a character does not exist, return the first character in letters.

Input: letters = ["c","f","j"], target = "c"
Output: "f"

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
*/

function nextGreatestLetter(letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] > target) {
      return letters[i];
    }
  }
  return letters[0];
}

// Optimized [Binary Search]

function nextGreatestLetterBinary(letters, target) {
  let left = 0,
    right = letters.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return letters[left % letters.length];
}

// Test

console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z'));

console.log(nextGreatestLetterBinary(['c', 'f', 'j'], 'c'));
console.log(nextGreatestLetterBinary(['x', 'x', 'y', 'y'], 'z'));
