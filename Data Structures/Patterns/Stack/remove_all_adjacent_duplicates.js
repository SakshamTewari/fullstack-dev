// Leetcode-1047

function removeAllAdjacentDuplicates(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (stack[stack.length - 1] !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.join("");
}

// Test

console.log(removeAllAdjacentDuplicates("abbac"));
