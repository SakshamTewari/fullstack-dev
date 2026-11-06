/*
Let 1 maps to 'A', 2 maps to 'B', ..., 26 to 'Z'. Given a digit sequence, count the number of possible decodings of the given digit sequence. 

Consider the input string "123". There are three valid ways to decode it:

"ABC": The grouping is (1, 2, 3) → 'A', 'B', 'C'
"AW": The grouping is (1, 23) → 'A', 'W'
"LC": The grouping is (12, 3) → 'L', 'C'
Note: Groupings that contain invalid codes (e.g., "0" by itself or numbers greater than "26") are not allowed.
For instance, the string "230" is invalid because "0" cannot stand alone, and "30" is greater than "26", so it cannot represent any letter. 
The task is to find the total number of valid ways to decode a given string.

Examples: 

Input: digits = "121"
Output: 3
Explanation: The possible decodings are "ABA", "AU", "LA"

Input: digits = "1234"
Output: 3
Explanation: The possible decodings are "ABCD", "LCD", "AWD"
*/

function decodeWays(digits, i, memo = {}) {
  // base case
  if (i >= digits.length) return 1;
  if (digits[i] === "0") return 0;

  if (i in memo) return memo[i];

  // single digit decoding

  memo[i] = decodeWays(digits, i + 1, memo);

  // double digit decoding
  if (i + 1 < digits.length) {
    const twoDigit = parseInt(digits.substring(i, i + 2));
    if (twoDigit >= 10 && twoDigit <= 26) {
      memo[i] += decodeWays(digits, i + 2, memo);
    }
  }
  return memo[i];
}

// Test
console.log(decodeWays("1234"));
