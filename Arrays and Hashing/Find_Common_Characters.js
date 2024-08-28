/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
*/
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  // Initialize an array to store the minimum frequency of each character
  let minFreq = new Array(26).fill(Infinity);

  // Loop through each word in words array
  for (let word of words) {
    let charFreq = new Array(26).fill(0);

    // Count frequency of each character in the current word
    for (let char of word) {
      charFreq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Update the minimum frequency array
    for (let i = 0; i < 26; i++) {
      minFreq[i] = Math.min(minFreq[i], charFreq[i]);
    }
  }

  // Collect all common characters based on their frequency
  let result = [];
  for (let i = 0; i < 26; i++) {
    while (minFreq[i] > 0) {
      result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
      minFreq[i]--;
    }
  }

  return result;
};
