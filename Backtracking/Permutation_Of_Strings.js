/*
Given a string s, the task is to return all permutations of a given string in lexicographically sorted order.

Note: A permutation is the rearrangement of all the elements of a string. Duplicate arrangement can exist.
*/

function permute(input, output = '', result = []) {
  if (input.length === 0) {
    result.push(output);
  }

  // Recurse for all characters
  for (let i = 0; i < input.length; i++) {
    let newInput = input.slice(0, i) + input.slice(i + 1);
    let newOutput = output + input[i];
    permute(newInput, newOutput, result);
  }
  return result;
}

// Test

console.log(permute('ABC'));
