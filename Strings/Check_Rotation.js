/*
Given two strings s1 and s2 of equal length, determine whether s2 is a rotation of s1.
A string is said to be a rotation of another if it can be obtained by shifting some leading characters of the original string to its end without changing the order of characters.

Input: s1 = "abcd", s2 = "cdab"
Output: true
Explanation: After 2 right rotations, s1 will become equal to s2.

*/

function isRotated(s2, s1) {
  if (s2.length !== s1.length) return false;
  return (s1 + s1).includes(s2);
}

function isRotatedWithoutIncludes(s2, s1) {
  let text = s1 + s1;

  for (let i = 0; i <= text.length - s2.length; i++) {
    let match = true;

    for (let j = 0; j < s2.length; j++) {
      if (text[i + j] !== s2[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}

// Test
console.log(isRotatedWithoutIncludes("abcde", "deabc"));
console.log(isRotated("deabc", "abcde"));
