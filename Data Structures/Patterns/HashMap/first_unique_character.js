// Leetcode-387

function firstUniqueCharacter(s) {
  let map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let key of map.keys()) {
    if (map.get(key) === 1) return s.indexOf(key);
  }
  return -1;
}

// Test

console.log(firstUniqueCharacter("ababc"));
