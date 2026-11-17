// Leetcode-22

function generateParantheses(n, open = 0, close = 0, temp = "", result = []) {
  if (open === n && close === n) {
    result.push(temp);
    return result;
  }

  if (open < n) {
    generateParantheses(n, open + 1, close, temp + "(", result);
  }

  if (close < open) {
    generateParantheses(n, open, close + 1, temp + ")", result);
  }

  return result;
}

// Test

console.log(generateParantheses(2));
