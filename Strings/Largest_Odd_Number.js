/*
Given a string s, representing a large integer, the task is to return the largest-valued odd integer (as a string) that is a substring of the given string s.
The number returned should not have leading zero's. But the given input string may have leading zero.

Input:s = "5347"
Output:"5347"
Explanation:The odd numbers formed by the given string are → 5, 3, 53, 347, 5347. The largest odd number without leading zeroes is 5347.
*/
function largestOddNumber(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    let digit = Number(s[i]);

    if (digit % 2 === 1) {
      return s.slice(0, i + 1);
    }
  }
  return ""; // no odd number found
}

// Test
console.log(largestOddNumber("5437"));
