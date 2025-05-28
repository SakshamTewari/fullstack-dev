/*
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
A substring is a contiguous sequence of characters within a string.

 
Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
*/

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  // Traverse the string from the end to the start
  for (let i = num.length - 1; i >= 0; i--) {
    // Check if the character at position i is odd
    if (parseInt(num[i]) % 2 !== 0) {
      // Return the substring from 0 to i (inclusive)
      return num.slice(0, i + 1);
    }
  }
  // If no odd number is found, return an empty string
  return '';
};

/*
function largestOddNumber(num) {
    let maxOdd = "";

    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j <= num.length; j++) {
            const sub = num.slice(i, j);
            const lastDigit = sub[sub.length - 1];
            if (parseInt(lastDigit) % 2 === 1) {
                // Check if this is greater than maxOdd
                if (maxOdd === "" || BigInt(sub) > BigInt(maxOdd)) {
                    maxOdd = sub;
                }
            }
        }
    }

    return maxOdd;
}

*/
