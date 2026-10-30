// Leetcode-3

// if lowercase use Array, otherwise use Set or Map
function longestSubstringWithoutDuplicates(s) {
  let longest = -1;
  let low = 0;
  let freq = new Array(26).fill(0);

  for (let high = 0; high < s.length; high++) {
    let char = s.charCodeAt(high) - 97;
    freq[char]++;

    // adjust
    while (freq[char] >= 2) {
      let leftChar = s.charCodeAt(low) - 97;
      freq[leftChar]--;
      low++;
    }

    longest = Math.max(longest, high - low + 1);
  }
  return longest;
}

//Test

console.log(longestSubstringWithoutDuplicates("abcabcbb"));
1;
