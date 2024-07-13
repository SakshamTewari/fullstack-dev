/*

Write a function that reverses a string. 
The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    swap(s, start, end);
    start++;
    end--;
  }
  return s;
};

function swap(str, start, end) {
  let a = str[start];
  str[start] = str[end];
  str[end] = a;
  return str;
}
