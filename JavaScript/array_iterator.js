/* Array Iterator

    - accepts an array, returns new method that returns next array value on each invocation
    - next(), done()
    - hint: closure

*/

const Iterator = (array) => {
  let nextIndex = 0;

  // return 2 methods
  return {
    // method to return next value
    next: function () {
      return nextIndex < array.length ? array[nextIndex++] : null;
    },
    // method to check if all the values are returned from the array
    done: function () {
      return nextIndex >= array.length;
    },
  };
};

let iterator = Iterator([1, 2, 'Saksham']);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.done());
console.log(iterator.next());
console.log(iterator.done());
