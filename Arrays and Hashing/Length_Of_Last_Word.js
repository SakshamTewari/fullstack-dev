/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastWordLength = 0;
  let cursor = s.length - 1;
  while (cursor >= 0 && s[cursor] === ' ') {
    cursor--;
  }
  while (cursor >= 0 && s[cursor] !== ' ') {
    lastWordLength++;
    cursor--;
  }
  return lastWordLength;
};
