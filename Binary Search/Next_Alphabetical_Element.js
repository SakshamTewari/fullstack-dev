/*
Given a list of sorted characters consisting of both Uppercase and Lowercase Alphabets and a particular target value, say K, the task is to find the smallest element in the list that is larger than K. 
Letters also wrap around. For example, if K = 'z' and letters = ['A', 'r', 'z'], then the answer would be 'A'.

Examples:  

Input : Letters = ["D", "J", "K"]
        K = "B"
Output: 'D'
Explanation:
The Next greater character of "B" is 'D'
since it is the smallest element from the 
set of given letters, greater than "B".
Input:  Letters = ["h", "n", "s"]
        K = "t"
Output: 'h'
*/

function nextGreatestAlphabet(letters, target) {
  let left = 0,
    right = letters.length - 1;
  let ans = -1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (letters[mid] > target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return letters[ans === -1 ? 0 : ans];
}

// Test
console.log(nextGreatestAlphabet(["D", "J", "K"], "B"));
