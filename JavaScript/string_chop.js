/* Chop String into chunks of given length and return it as an array */

const str = 'Saksham';

const chop = (str, chunkSize) => {
  const output = [];

  let i = 0;
  while (i < str.length) {
    output.push(str.slice(i, i + chunkSize));
    i += chunkSize;
  }
  return output;
};

console.log(chop(str, 2));

// using regex

const chopUsingRegex = (str, chunkSize) => {
  return str.match(new RegExp('.{1,' + chunkSize + '}', 'g'));
};

console.log(chopUsingRegex(str, 2));
