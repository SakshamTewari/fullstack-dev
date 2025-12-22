/*
Given an array of n strings arr[]. The task is to determine the number of words remaining after pairwise destruction.
If two consecutive words in the array are identical, they cancel each other out. This process continues until no more eliminations are possible.

Examples: 

Input: arr[] = ["gfg", "for", "geeks", "geeks", "for"]
Output: 1
Explanation: After the first iteration, we'll have: [gfg, for, for]. Then after the second iteration, we'll have: [gfg]. No more eliminations are possible. Hence, the result is 1.

Input: arr[] = ["ab", "aa", "aa", "bcd", "ab"]
Output: 3
Explanation: After the first iteration, we'll have: [ab, bcd, ab]. We can't further destroy more strings and hence we stop and the result is 3. 

Input: arr[] = ["tom", "jerry", "jerry", "tom"]
Output: 0
Explanation: After the first iteration, we'll have: [tom, tom]. After the second iteration: 'empty-array' . Hence, the result is 0.
*/

function deleteConsecutiveSameWords(arr) {
  let stack = [];

  for (let word of arr) {
    if (stack.length > 0 && stack[stack.length - 1] === word) {
      stack.pop();
    } else {
      stack.push(word);
    }
  }
  return stack.length;
}

// Test
console.log(deleteConsecutiveSameWords(["ab", "aa", "aa", "bcd", "ab"]));
