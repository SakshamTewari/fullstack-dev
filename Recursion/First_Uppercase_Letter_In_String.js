/*
Given a string find its first uppercase letter

Input : geeksforgeeKs
Output : K
*/

function firstUppercase(str, i = 0) {
  if (i === str.length) return;
  // check for lowercase also as we don't want to include symbols. Ex: @
  if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase())
    return str[i];

  return firstUppercase(str, i + 1);
}

// Test
console.log(firstUppercase('geeksforgeeKs'));
