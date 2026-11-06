/* Validate Palindrome

    - check only for alphanumeric characters
    - lowercase and uppercase as same

*/

function validatePalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return cleaned === cleaned.split('').reverse().join('');
}
