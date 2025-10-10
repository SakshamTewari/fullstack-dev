/*
Given a string s, you need to print all possible strings that can be made by placing spaces (zero or one) in between them. 
The output should be printed in sorted increasing order of strings.

Example 1:

Input:
s = "ABC"
Output: (A B C)(A BC)(AB C)(ABC)
Explanation:
ABC
AB C
A BC
A B C
These are the possible combination of "ABC".
*/

function permutationWithSpaces(str, output = '', i = 0, result = []) {
  if (i === str.length) {
    result.push(output.trim());
    return result;
  }

  // Choice 1: include space
  if (output.length > 0) {
    permutationWithSpaces(str, output + ' ' + str[i], i + 1, result);
  }
  // Choice 2: without space
  permutationWithSpaces(str, output + str[i], i + 1, result);

  return result;
}

// Test
console.log(permutationWithSpaces('ABC'));
