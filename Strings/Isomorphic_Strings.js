/*
Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Input: s = "paper", t = "title"
Output: true
Explanation:
The characters in "s" can be mapped one-to-one to characters in "t": 
'p' → 't', 'a' → 'i', 'e' → 'l', 'r' → 'e'
Since the mapping is consistent and unique for each character, the strings are isomorphic.
*/

function areIsomorphic(s1, s2) {
  let m1 = Array(256).fill(0),
    m2 = Array(256).fill(0);
  for (let i = 0; i < s1.length; i++) {
    if (m1[s1.charCodeAt(i)] !== m2[s2.charCodeAt(i)]) return false;

    m1[s1.charCodeAt(i)] = i + 1;
    m2[s2.charCodeAt(i)] = i + 1;
  }
  return true;
}

function areIsomorphicObject(s1, s2) {
  if (s1.length !== s2.length) return false;

  let m1 = {};
  let m2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (m1[s1[i]] !== m2[s2[i]]) return false;

    m1[s1[i]] = i + 1;
    m2[s2[i]] = i + 1;
  }
  return true;
}

// Test

console.log(areIsomorphic("paper", "title"));
console.log(areIsomorphicObject("paper", "title"));
console.log(areIsomorphicObject("foo", "bar"));
