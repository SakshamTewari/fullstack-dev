/*
Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
*/

function removeOuterParantheses(str) {
  let result = '';
  let stack = [];

  for (let char of str) {
    if (char === '(') {
      // if not outermost
      if (stack.length > 0) {
        result += char;
      }
      stack.push(char);
    } else {
      stack.pop(); // Matching ')'
      if (stack.length > 0) {
        // if not outermost
        result += char;
      }
    }
  }
  return result;
}

/*
Example str: (()())(())

Step	Char	Stack	   Action	       Result
1	     (	     [(]	   Outer → skip	
2	     (	     [(, (]	   Add to result	(
3	     )	     [(]	   Add to result	()
4	     (	     [(, (]	   Add to result	()(
5	     )	     [(]	   Add to result	()()
6	     )	     []	       Outer → skip	
7	     (	     [(]	   Outer → skip	
8	     (	     [(, (]	   Add to result	()()(
9	     )	     [(]	   Add to result	()()()
10	     )	     []	       Outer → skip	

Final result: ()()() 
*/

//Test
console.log(removeOuterParantheses('(()())(())'));
