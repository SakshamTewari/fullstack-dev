/*
 You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.
If two or more characters have same frequency then arrange them in alphabetic order.

Input:s = "tree"
Output:['e', 'r', 't']
Explanation:
e → 2
r → 1
t → 1
*/
function charactersFreq(s) {
  let freq = {};

  // build freq
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // extract keys
  let chars = Object.keys(freq);

  // sort
  chars.sort((a, b) => {
    if (freq[b] !== freq[a]) {
      return freq[b] - freq[a]; // higher frequency first
    }
    return a.localeCompare(b); // alphabetical
  });
  return chars;
}

// Test
console.log(charactersFreq("banana"));
