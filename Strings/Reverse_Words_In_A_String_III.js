/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
 
*/

function reverseWords(s) {
  let result = '';
  let p1 = 0; // pointer for each word

  for (let i = 0; i <= s.length; i++) {
    let char = s[i];

    if (char === ' ' || i === s.length) {
      let word = reverse(s, p1, i - 1);
      result += word;
      if (i !== s.length) {
        result += ' ';
      }
      p1 = i + 1;
    }
  }

  function reverse(word, start, end) {
    let reverseWord = '';
    for (let i = end; i >= start; i--) {
      reverseWord += word[i];
    }
    return reverseWord;
  }
  return result;
}

/*
function reverseWords(s) {
  return s
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
*/

// Test
console.log(reverseWords("Let's take LeetCode contest"));
