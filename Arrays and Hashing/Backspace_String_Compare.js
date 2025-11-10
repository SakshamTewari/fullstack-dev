/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

 
Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
*/
var backspaceCompare = function (s, t) {
  let cursorS = s.length - 1;
  let cursorT = t.length - 1;

  let skipS = 0;
  let skipT = 0;

  while (cursorS >= 0 || cursorT >= 0) {
    // Process string s
    while (cursorS >= 0) {
      if (s[cursorS] === '#') {
        skipS++;
        cursorS--;
      } else if (skipS > 0) {
        skipS--;
        cursorS--;
      } else {
        break;
      }
    }

    // Process string t
    while (cursorT >= 0) {
      if (t[cursorT] === '#') {
        skipT++;
        cursorT--;
      } else if (skipT > 0) {
        skipT--;
        cursorT--;
      } else {
        break;
      }
    }

    // Compare the current characters of s and t
    if (cursorS >= 0 && cursorT >= 0 && s[cursorS] !== t[cursorT]) {
      return false;
    }

    // If one string has ended but the other has not
    if (cursorS >= 0 !== cursorT >= 0) {
      return false;
    }

    cursorS--;
    cursorT--;
  }

  return true;
};

//----------------------- Try with Stack next ------------------------//
