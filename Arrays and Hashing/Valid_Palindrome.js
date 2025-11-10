/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

 
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let lower_s = s.toLowerCase();
  let newStr = '';

  // remove non=alphanumeric characters
  for (let i = 0; i < lower_s.length; i++) {
    var ascii = lower_s[i].charCodeAt(0);
    if ((ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57)) {
      //no need to check for A-Z as 's' is already lowerCased
      newStr = newStr + lower_s[i];
    }
  }
  let start = 0;
  let end = newStr.length - 1;

  // check if palindrome
  while (start <= end) {
    if (newStr[start] != newStr[end]) return false;
    start++;
    end--;
  }
  return true;
};
