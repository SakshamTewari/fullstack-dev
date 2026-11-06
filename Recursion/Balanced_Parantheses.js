/*
Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, ”}”, ”(“, ”)”, ”[“, ”]” are correct in exp. 

Examples: 

Input : exp = “[()]{}{[()()]()}”
Output : true

Input : exp = “[(])”
Output : false
*/

function isBalancedParantheses(str, i = 0, expected = '') {
  if (i === str.length) return expected === '';

  // opening braces
  if (str[i] === '(') {
    return isBalancedParantheses(str, i + 1, ')' + expected);
  } else if (str[i] === '[') {
    return isBalancedParantheses(str, i + 1, ']' + expected);
  } else if (str[i] === '{') {
    return isBalancedParantheses(str, i + 1, '}' + expected);
  }

  // closing braces
  if (expected === '' || str[i] !== expected[0]) return false;

  return isBalancedParantheses(str, i + 1, expected.slice(1));
}
