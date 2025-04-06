/* Currying

    - concept of functional programming
    - we can pass functions as arguments(callbacks) and return functions
    - we can transform a function with multiple arguments into  a sequence of nesting functions

    sum(1)(2)(3)(4) => 10
    sum(1,2)(3)(4) => 10 ... etc..

*/

const curryingSum = (...args) => {
  const storage = [...args];
  if (storage.length === 4) {
    return storage.reduce((a, b) => a + b, 0);
  } else {
    // create inner function that will form a closure with 'storage'
    const temp = function (...args2) {
      storage.push(...args2);
      if (storage.length === 4) {
        return storage.reduce((a, b) => a + b, 0);
      } else {
        return temp;
      }
    };
    return temp;
  }
};

// Case: when no argument is passed  (eg: sum(1)(2)())
const curryingSum2 = (...args2) => {
  const storage = [...args2];
  if (storage.length === 0) {
    return 0;
  } else {
    const temp = function (...args2) {
      storage.push(...args2);
      if (args2.length === 0) {
        return storage.reduce((a, b) => a + b, 0);
      } else {
        return temp;
      }
    };
    return temp;
  }
};
