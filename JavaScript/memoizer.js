/* Memoize or cache the result for given input

    - optimization technique to avoid recomputation in intensive computation.
    - create a closure with high-order function.

*/

const memoize = function (fn) {
  const cache = {};
  return function () {
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      return cache[key];
    }

    const evaluatedValue = fn(...arguments);
    cache[key] = evaluatedValue;
    return evaluatedValue;
  };
};

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

let a = memoizedFactorial(30);
console.log(a);

let b = memoizedFactorial(30);
console.log(b);
