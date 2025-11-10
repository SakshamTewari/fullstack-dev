/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let res = '';
  let i = 0;
  let j = 0;
  while (i < word1.length && j < word2.length) {
    res += word1[i];
    res += word2[i];
    i++;
    j++;
  }

  if (i === word1.length && j !== word2.length) {
    while (j !== word2.length) {
      res += word2[j];
      j++;
    }
  }
  if (j === word2.length && i !== word1.length) {
    while (i !== word1.length) {
      res += word1[i];
      i++;
    }
  }
  return res;
};
