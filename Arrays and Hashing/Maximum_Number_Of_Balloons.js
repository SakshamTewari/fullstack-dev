/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.

 
Example 1:

Input: text = "nlaebolko"
Output: 1
*/
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let map = new Map();

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (
      char === 'b' ||
      char === 'a' ||
      char === 'l' ||
      char === 'o' ||
      char === 'n'
    ) {
      if (map.has(char)) {
        map.set(char, map.get(char) + 1);
      } else {
        map.set(char, 1);
      }
    }
  }

  return Math.min(
    map.get('b') || 0,
    map.get('a') || 0,
    Math.floor((map.get('l') || 0) / 2),
    Math.floor((map.get('o') || 0) / 2),
    map.get('n') || 0,
  );
};
