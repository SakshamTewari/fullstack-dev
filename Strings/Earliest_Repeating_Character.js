/*
Given a string S of length n, the task is to find the earliest repeated character in it. 
The earliest repeated character means, the character that occurs more than once and whose second occurrence has the smallest index.

Example:

Input: s = "geeksforgeeks" 
Output: e 
Explanation: e is the first element that repeats

Input: s = "hello geeks" 
Output: l 
Explanation: l is the first element that repeats
*/

// Using Frequenncy Array [O(n) time, O(1) space]
function earliestRepeatingCharacter(s) {
  let charCount = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt(0) - "a".charCodeAt(0);
    if (charCount[index] !== 0) {
      return s[i];
    }
    charCount[index]++;
  }

  return -1;
}

// Test
console.log(earliestRepeatingCharacter("hello"));
