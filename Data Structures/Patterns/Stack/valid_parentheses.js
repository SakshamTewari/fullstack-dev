// Leetcode-20

function validParentheses(s) {
  let stack = [];
  let pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    } else {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }
  return stack.length === 0;
}

// Test

console.log(validParentheses("()[]{}"));
