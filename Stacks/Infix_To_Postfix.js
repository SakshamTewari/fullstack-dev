/*
Given a string s representing an infix expression ("operand1 operator operand2" ), 
Convert it into its postfix notation ("operand1 operand2 operator").

Note: The precedence order is as follows: (^) has the highest precedence and is evaluated from right to left, (* and /) come next with left to right associativity, and (+ and -) have the lowest precedence with left to right associativity.

Examples:

Input: s = "a*(b+c)/d"
Output: abc+*d/
Explanation: The expression is a * (b + c) / d. First, inside the brackets, b + c becomes bc+. Now the expression looks like a * (bc+) / d. Next, multiply a with (bc+), so it becomes abc+* . Finally, divide this result by d, so it becomes abc+*d/.

Input: s = "a+b*c+d"
Output: abc*+d+
Explanation: The expression a + b * c + d is converted by first doing b * c → bc*, then adding a → abc*+, and finally adding d → abc*+d+.
*/

function infixToPostfix(str) {
  let stack = [];
  let result = "";

  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
  const associativity = { "+": "L", "-": "L", "*": "L", "/": "L", "^": "R" };

  for (let ch of str) {
    if (/[a-zA-Z0-9]/.test(ch)) {
      result += ch;
    } else if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.pop(); // remove '(' from stack)
    } else {
      while (
        (stack.length &&
          precedence[stack[stack.length - 1]] !== undefined &&
          associativity[ch] === "L" &&
          precedence[ch] <= precedence[stack[stack.length - 1]]) ||
        (associativity[ch] === "R" &&
          precedence[ch] < precedence[stack[stack.length - 1]])
      ) {
        result += stack.pop();
      }
      stack.push(ch);
    }
  }

  // pop remaining
  while (stack.length) {
    result += stack.pop();
  }

  return result;
}

// Test
console.log(infixToPostfix("a*(b+c)/d"));
