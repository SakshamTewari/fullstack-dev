/*
Examples: 

Input : ab
Output : AB Ab ab aB

Input : ABC
Output : abc Abc aBc ABc abC AbC aBC ABC
*/

function permutationWithCaseChange(str, output = '', i = 0, result = []) {
  if (i === str.length) {
    result.push(output);
    return result;
  }

  // choice 1: lowercase
  permutationWithCaseChange(str, output + str[i].toLowerCase(), i + 1, result);
  // choice 2: uppercase
  permutationWithCaseChange(str, output + str[i].toUpperCase(), i + 1, result);

  return result;
}

// Test
console.log(permutationWithCaseChange('abc'));
