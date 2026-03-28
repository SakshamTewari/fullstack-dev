/* Anagram

    - word formed by rearranging letters of another word using all original letters exactly  once
    - comparison should be case-insensitive
    - ignore non-alphabetic characters
    - empty strings are valid inputs

*/

function isAnagram(str1, str2) {
  // Your implementation
  const revStr = (str1) =>
    str1
      .toLowerCase()
      .replace(/[^a-z]/g, '')
      .split('')
      .sort()
      .join('');
  return revStr(str1) === revStr(str2);
}

// Test

console.log(isAnagram('hello', 'world'));
