/*
Given two string arrays word1 and word2, 
return true if the two arrays represent the same string, and false otherwise.

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true

Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

*/

function arrayStringsAreEqual(word1, word2) {
  let i = 0, // index for word1 and word2
    j = 0;
  let p1 = 0, // pointer for individual string
    p2 = 0;

  while (i < word1.length && j < word2.length) {
    if (word1[i][p1] !== word2[j][p2]) return false;

    // move pointers forward
    p1++;
    p2++;

    // move to next string in word1 if needed
    if (p1 === word1[i].length) {
      i++;
      p1 = 0;
    }

    // move to next string in word2 if needed
    if (p2 === word2[j].length) {
      j++;
      p2 = 0;
    }
  }
  // both must finish at the same time
  return i === word1.length && j === word2.length;
}

/*
function arrayStringsAreEqual(word1, word2) {
  return word1.join('') === word2.join('');
}
*/

// Test
console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc'])); // true
console.log(arrayStringsAreEqual(['abc', 'd'], ['ab', 'cd'])); // true
console.log(arrayStringsAreEqual(['a', 'cb'], ['ab', 'c'])); // false
