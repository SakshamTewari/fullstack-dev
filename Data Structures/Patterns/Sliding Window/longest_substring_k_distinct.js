// GFG : https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1

function longestSubstringKDistinct(s, k) {
  let low = 0;
  let maxLen = -1;
  let distinct = 0;
  const freq = new Array(26).fill(0);

  for (let high = 0; high < s.length; high++) {
    const rightChar = s.charCodeAt(high) - 97;

    if (freq[rightChar] === 0) {
      distinct++;
    }
    freq[rightChar]++;

    while (distinct > k) {
      const leftChar = s.charCodeAt(low) - 97;
      freq[leftChar]--;

      if (freq[leftChar] === 0) distinct--;
      low++;
    }

    if (distinct === k) {
      maxLen = Math.max(maxLen, high - low + 1);
    }
  }

  return maxLen;
}

// Test
console.log(longestSubstringKDistinct("aabacbebebe", 3));
