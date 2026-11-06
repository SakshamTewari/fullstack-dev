/* Take sentence as input and return new string where each word is reversed */

function reverseWords(sentence) {
  return sentence
    .split(/(\s+)/)
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
