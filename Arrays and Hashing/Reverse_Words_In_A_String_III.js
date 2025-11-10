/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = '';
  let j = 0;
  for (let i = 0; i <= s.length; i++) {
    if (s[i] == ' ' || i == s.length) {
      let word = reverse(s, j, i - 1);
      result += word;
      if (i !== s.length) {
        result += ' ';
      }
      j = i + 1;
    }
  }
  return result;
};

function reverse(word, start, end) {
  let reversedWord = '';
  for (let i = end; i >= start; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
