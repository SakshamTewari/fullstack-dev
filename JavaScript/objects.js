/* Objects

    - arrays, functions are also objects
    - objects can be restricted from getting modified
        Object.seal()
        Object.freeze()

*/

const obj = {
  prop: 42,
};

Object.seal(obj);
obj.prop = 33;
console.log(obj.prop); // 33

delete obj.prop; // cannot delete when sealed
console.log(obj.prop); // 33

// We cannot restrict modification of nested objects with Object.seal()

const obj1 = {
  prop: 42,
  nested: {
    a: 1,
    b: 2,
  },
};

Object.seal(obj1);

obj.nested.a = 2;
delete obj.nested.a;
console.log(obj.nested.a); // undefined

// We can create a helper function to deep seal or seal nested objects as well

function deepSeal(object) {
  let propNames = Object.getOwnPropertyNames(object);

  // Seal properties before sealing self
  for (let prop of propNames) {
    let value = object[prop];

    object[prop] = value && typeof value === 'object' ? deepSeal(value) : value;
  }

  return Object.seal(object);
}

// Deep Seal the object
deepSeal(obj1);

obj.nested.a = 2;
delete obj.nested.a;
console.log(obj.nested.a); // 2

// Object.isSealed() to confirm

console.log(Object.isSealed(obj1)); // true
