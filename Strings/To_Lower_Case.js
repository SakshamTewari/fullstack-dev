/* Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 
Example 1:

Input: s = "Hello"
Output: "hello" 

Example 3:

Input: s = "LOVELY"
Output: "lovely"
*/

function toLowerCase(s) {
  return s
    .split('')
    .map((char) => char.toLowerCase())
    .join('');
}

/*
function toLowerCaseString(s) {
  let result = '';

  for (let char of s) {
    let code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      // Uppercase A-Z → convert to lowercase
      result += String.fromCharCode(code + 32);
    } else {
      result += char;
    }
  }

  return result;
}

*/

// Test

console.log(toLowerCase('Hello'));
console.log(toLowerCase('CODE'));
