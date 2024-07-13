/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const mappings = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  let stack = [];

  for (let char of s) {
    if (mappings[char]) {
      const topElement = stack.length ? stack.pop() : '#';
      if (topElement != mappings[char]) {
        return false;
      }
    } else stack.push(char);
  }
  return stack.length === 0;
};
