/*
Given a string s, the task is to return all permutations of a given string in lexicographically sorted order.

Note: A permutation is the rearrangement of all the elements of a string. Duplicate arrangement can exist.

Time Complexity: O(n^2 * n!)  - Simple recursion
*/

// Simple Recursion

function permuteRecursion(input, output = '', result = []) {
  if (input.length === 0) {
    result.push(output);
  }

  let used = new Set();
  // Recurse for all characters
  for (let i = 0; i < input.length; i++) {
    if (used.has(input[i])) continue;

    used.add(input[i]);
    let newInput = input.slice(0, i) + input.slice(i + 1);
    let newOutput = output + input[i];
    permuteRecursion(newInput, newOutput, result);
  }
  return result;
}

// Test

console.log(permuteRecursion('ABC'));

// Backtracking    [Note: String is immutable in JS (characters cant be swapped), so we need to convert it to string]

function permuteBacktracking(arr, start = 0, result = []) {
  if (start >= arr.length - 1) {
    result.push(arr.join(''));
    return;
  }

  for (let i = start; i < arr.length; i++) {
    // swap
    [arr[start], arr[i]] = [arr[i], arr[start]];

    // recurse
    permuteBacktracking(arr, start + 1, result);

    // backtrack ( swap back to original )
    [arr[start], arr[i]] = [arr[i], arr[start]];
  }

  return result;
}

// Test
console.log(permuteBacktracking('ABCD'.split('')));
