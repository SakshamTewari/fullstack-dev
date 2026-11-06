function countVowels(str) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) result++;
  }
  return result;
}

// Test
let str = 'Saksham';
console.log(countVowels(str));
