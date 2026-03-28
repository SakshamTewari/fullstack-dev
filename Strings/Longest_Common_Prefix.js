/*
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".

Input: str = ["flower", "flow", "flight"]
Output:"fl"
Explanation: All strings in the array begin with the common prefix "fl".
*/

// without sort
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i > strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}

// with sort
function longestCommonPrefixSort(strs) {
  if (strs.length === 0) return "";

  strs.sort();

  let first = strs[0];
  let last = strs[strs.length - 1];

  let i = 0;
  while (i < first.length && first[i] === last[i]) {
    i++;
  }
  return first.slice(0, i);
}

// Test
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefixSort(["flower", "flow", "flight"]));
