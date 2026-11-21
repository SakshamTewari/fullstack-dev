// GFG - https://www.geeksforgeeks.org/problems/remove-all-occurrences-of-a-character-in-a-string/1

// Recursion
function removeOccurences(s, c, i = 0, result = "") {
  if (i === s.length) return result;

  if (s[i] !== c) {
    return removeOccurences(s, c, i + 1, result + s[i]);
  } else {
    return removeOccurences(s, c, i + 1, result);
  }
}

// Backtracking
function removeOccurencesBacktracking(s, c, i = 0, curr = []) {
  if (i === s.length) {
    return curr.join("");
  }

  if (s[i] !== c) {
    curr.push(s[i]);
    const result = removeOccurencesBacktracking(s, c, i + 1, curr);
    curr.pop();
    return result;
  }

  return removeOccurencesBacktracking(s, c, i + 1, curr);
}

function removeOccurencesBasic(s, c) {
  let res = "";
  for (let char of s) {
    if (char !== c) {
      res += char;
    }
  }
  return res;
}

// Test

console.log(removeOccurences("geeksforgeeks", "e"));
