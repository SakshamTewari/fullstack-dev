// Leetcode-424

function longestSubstringCharacterReplacement(s, k) {
  let low = 0;
  let longest = 0;
  let maxFreq = 0;
  let freq = new Array(26).fill(0);

  for (let high = 0; high < s.length; high++) {
    let char = s.charCodeAt(high) - 65; // uppercase characters
    freq[char]++;

    maxFreq = Math.max(maxFreq, freq[char]);

    // adjust
    while (maxFreq + k < high - low + 1) {
      let leftChar = s.charCodeAt(low) - 65;
      freq[leftChar]--;
      low++;
    }
    longest = Math.max(longest, high - low + 1);
  }
  return longest;
}

// Test
console.log(longestSubstringCharacterReplacement("AABABBA", 1));
