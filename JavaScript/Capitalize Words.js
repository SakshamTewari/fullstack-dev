/* Capitalize words

    - return a new sentence where the 1st letter of each word is capitalized and rest in lowercase
    - leading/trailing spaces should be trimmed
    - words can only contain letters
    - input may have multiple spaces between words.

*/

function capitalizeWords(sentence) {
  return sentence
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// Test

console.log(capitalizeWords(' multiple    spaces'));

/* if we want to preserve punctuation or hyphenated words like john-doe 

function capitalizeWords(sentence) {
  return sentence
    .trim()
    .split(/\s+/)
    .map(word =>
      word
        .split(/(-)/) // preserve hyphens as separators
        .map(part =>
          /^[a-zA-Z]/.test(part) // only capitalize if it starts with a letter
            ? part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
            : part
        )
        .join('')
    )
    .join(' ');
}

*/
