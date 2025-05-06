/* function that takes single input and returns its data type

    - null and array case should be handled separately as typeof(array) === typeof(null) === 'object'

*/

function detectType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

// Test

console.log(detectType(null));
console.log(detectType([1, 2, 3]));
console.log(detectType('Saksham'));
