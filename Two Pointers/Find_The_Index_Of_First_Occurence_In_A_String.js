/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0; // Handle the case where needle is an empty string
  let pos = 0;
  let i = 0;

  while (i < haystack.length) {
    if (haystack[i] === needle[0]) {
      pos = i;
      let cursor = 0;
      while (
        cursor < needle.length &&
        haystack[i + cursor] === needle[cursor]
      ) {
        cursor++;
      }
      if (cursor == needle.length) {
        return pos;
      }
    }
    i++;
  }

  return -1;
};
