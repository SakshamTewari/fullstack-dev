/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
*/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  let left = 1,
    right = x,
    result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid; // Exact square root found
    } else if (square < x) {
      result = mid; // Store potential answer
      left = mid + 1; // Search the right half
    } else {
      right = mid - 1; // Search the left half
    }
  }

  return result; // Return the integer part of the square root
};

/*

*/

function nthRoot(n, m) {
  let low = 1,
    high = m;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midPower = Math.pow(mid, n);

    if (midPower === m) return mid;
    else if (midPower < m) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

function nthRootPrecise(n, m) {
  let low = 0,
    high = m;

  while (low + 1e-6 < high) {
    let mid = (low + high) / 2;

    if (Math.pow(mid, n) < m) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return low;
}

// Test

console.log(nthRoot(4, 16));
console.log(nthRootPrecise(4, 17));
