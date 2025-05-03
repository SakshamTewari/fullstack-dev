/* Object.assign()

    - copies all enumerable own properties from 1 or more source objects to a target object
    - returns modified target object

*/

function customAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert  undefined or null');
  }

  const to = Object(target); //Converts the target into an object (in case it’s a primitive like a string or number

  for (const source of sources) {
    if (source === null || source === undefined) continue;

    for (const key in source) {
      // checks whether the source object has an "own" property called key
      // property exists directly on source, not inherited from its prototype chain.
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        to[key] = source[key];
      }
    }
  }
  return to;
}

// Test

const a = { x: 1 };
const b = { y: 2 };
const result = customAssign(a, b);
console.log(result); // { x: 1, y: 2 }
