/* Polyfill for groupBy()

    - accepts a collection and iteratee as arguments
    - returns object with key as iteratee's value


*/

const groupBy = (values, keyFinder) => {
  return values.reduce((a, b) => {
    const key = typeof keyFinder === 'function' ? keyFinder(b) : b[keyFinder];
    if (!a[key]) {
      a[key] = [b];
    } else {
      a[key] = [...a[key], b];
    }
    return a;
  }, {});
};

// Test
console.log(groupBy([6.1, 7.1, 5.4], Math.floor));
console.log(groupBy(['one', 'two', 'three'], 'length'));
