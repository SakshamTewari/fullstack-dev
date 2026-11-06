function minWindow(s, t) {
  if (t.length > s.length) return "";

  let minLength = Infinity;
  let result = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j < s.length; j++) {
      const substring = s.slice(i, j + 1);

      if (containsAllCharacters(substring, t)) {
        if (substring.length < minLength) {
          minLength = substring.length;
          result = substring;
        }

        break;
      }
    }
  }
  return result;
}

function containsAllCharacters(substring, t) {
  const counts = new Map();

  for (const char of substring) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!counts.has(char) || counts.get(char) === 0) {
      return false;
    }
    counts.set(char, counts.get(char) - 1);
  }
  return true;
}
