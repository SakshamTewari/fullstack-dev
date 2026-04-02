/*
Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.
Input:s = "(1+(2*3)+((8)/4))+1"
Output:3
Explanation:Digit 8 is inside of 3 nested parentheses in the string.
*/

function paranthesisDepth(s) {
  let maxDepth = 0;
  let currentDepth = 0;

  for (let char of s) {
    if (char === "(") {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (char === ")") {
      currentDepth--;
    }
  }
  return maxDepth;
}

// Test
console.log(paranthesisDepth("(1+(2*3)+((8)/4))+1"));
