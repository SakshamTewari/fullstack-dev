/*
Given a positive integer num, return true if num is a perfect square or false otherwise.
A perfect square is an integer that is the square of an integer. 
You must not use any built-in library function, such as sqrt.

Input: num = 16
Output: true
*/

function isPerfectSquare(num) {
  if (num < 1) return false;

  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let square = mid * mid;

    if (square === num) return true;
    else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

// Test

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
