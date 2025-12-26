/*
Given a balanced expression string s, check if it contains redundant parentheses. 
Return true if redundant, else false.
Redundant Parentheses: Parentheses are redundant if removing them does not change the expression.
Note: Expression is valid, contains operators +, -, *, /, and no spaces.

Examples: 

Input: s = "((a+b))"
Output: true
Explanation: ((a+b)) can be simplified to (a+b), which means the outer parentheses are redundant.

Input: s = "(a+(b)/c)"
Output: true
Explanation: (a+(b)/c) can reduced to (a+b/c) because b is surrounded by () which is redundant.

Input: s = "((a+b)*c)"
Output:  false
Explanation: Removing any parentheses would change the order of evaluation, so none of them are redundant.

*/

/*
Traverse expression character by character
Push everything except )
When ) is found:
Pop until ( is found
Check if any operator existed between them
If no operator found → redundant
*/

function checkRedundancy(s) {
  let stack = [];

  for (let char of s) {
    if (char === ")") {
      let hasOperator = false;
      // pop until (
      while (stack.length && stack[stack.length - 1] !== "(") {
        let top = stack.pop();
        if (top === "+" || top === "-" || top === "*" || top === "/") {
          hasOperator = true;
        }
      }

      stack.pop(); // pop (

      // no operator inside ()
      if (!hasOperator) {
        return true;
      }
    } else {
      stack.push(char);
    }
  }
  return false;
}

// Test
console.log(checkRedundancy("((a+b))"));
