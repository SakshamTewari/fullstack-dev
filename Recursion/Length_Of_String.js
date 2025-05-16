/*
Given a string calculate length of the string using recursion.

Input: str = "abcd"
Output: 4
*/

function strLen(str) {
  if (str === '') return 0;
  return 1 + strLen(str.substring(1));
}

// Test
console.log(strLen('chat'));
