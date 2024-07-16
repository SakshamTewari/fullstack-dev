/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.


Example 1:

Input: s = "egg", t = "add"
Output: true
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map_st = new Map();
  let map_ts = new Map();
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    // No mapping exists in either of the maps
    if (!map_st.has(c1) && !map_ts.has(c2)) {
      map_st.set(c1, c2);
      map_ts.set(c2, c1);
    }
    // Either mapping doesn't exists or doesn't match in either or both maps
    else if (map_st.get(c1) !== c2 || map_ts.get(c2) !== c1) {
      return false;
    }
  }
  return true;
};
