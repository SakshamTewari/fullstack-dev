/*
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

function lengthOfLongestSubstring(s) {
  let map = {};
  let maxLen = 0,
    left = 0;

  for (let right = 0; right < s.length; right++) {
    if (map[s[right]] !== undefined && map[s[right]] >= left)
      left = map[s[right]] + 1;

    map[s[right]] = right;
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

function longestSubstringSlidingWindow(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    // if character already present, shrink
    // using while to delete any char which might be present in between. so we have to remove all from left till we reach the duplicate char
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    // add current
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

function longestSubstringHash(s) {
  let n = s.length;
  let hashLen = 256; // assuming ASCII character set
  let hash = new Array(hashLen).fill(-1); // initialize all characters as not present
  let l = 0,
    r = 0,
    maxLen = 0;

  while (r < n) {
    let charCode = s.charCodeAt(r);

    // character already seen
    if (hash[charCode] !== -1) {
      // move left pointer
      l = Math.max(l, hash[charCode] + 1);
    }

    // update last seen
    hash[charCode] = r;
    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }
  return maxLen;
}

// Test

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(longestSubstringSlidingWindow("abcabcbb"));
console.log(longestSubstringHash("abcabcbb"));
