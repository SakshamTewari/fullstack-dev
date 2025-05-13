/*
You are given a string s and an integer array indices of the same length. 
The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

Example 1:

Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
 */

function restoreString(s, indices) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let finalIndex = indices[i];
    result[finalIndex] = char;
  }
  return result.join('');
}

/*
function restoreString(s, indices) {
  return indices
    .map((_, i) => [indices[i], s[i]])
    .sort((a, b) => a[0] - b[0])
    .map(pair => pair[1])
    .join('');
}
*/

// Test
console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
