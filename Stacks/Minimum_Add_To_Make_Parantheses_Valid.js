/*
A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.

Example 1:

Input: s = "())"
Output: 1

Example 2:

Input: s = "((("
Output: 3
*/

function minAddToMakeValid(str) {
  let stack = [];

  for (let char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length > 0 && stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }

  return stack.length;
}

// Test

console.log(minAddToMakeValid('((('));
console.log(minAddToMakeValid('()('));
console.log(minAddToMakeValid('())'));
