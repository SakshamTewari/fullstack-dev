/*
Given a string s consisting of lowercase letters, for each position i in the string (0 ≤ i < n), find the first non-repeating character in the prefix s[0..i]. 
If no such character exists, use '#'.

Examples:

Input: s = "aabc"
Output: a#bb
Explanation: 
After 'a' → first unique = 'a'
After 'aa' → no unique → '#'
After 'aab' → first unique = 'b'
After 'aabc' → first unique = 'b'
Result = a#bb

Input: s = "bb"
Output: b#
Explanation: 
After 'b' → first unique = 'b'
After 'bb'→ no unique → '#'
Result = b#
*/

function firstNonRepeating(str) {
  let freq = {};
  let res = "";
  let q = [];

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
    q.push(ch);

    // remove repeating ones (always the 0th element)
    while (q.length && freq[q[0]] > 1) {
      q.shift();
    }
    res += q.length ? q[0] : "#";
  }
  return res;
}

// Test
console.log(firstNonRepeating("aabc"));
