/* Nested Array  (Multidimensional)

    - count all the elements in a nested array that pass the test in the callback function
    - hint: use closure

*/

let countInArray = function (inputArr, callback) {
  let count = 0;

  const search = (arr, callback) => {
    for (let el of arr) {
      if (callback(el)) {
        count++;
      }
      // if sub-array, recursively call the search function
      if (Array.isArray(el)) {
        search(el, callback);
      }
    }
  };
  search(inputArr, callback);

  return count;
};

// Test
const arr = [[1, [2, [3, 4, 'foo', { a: 1, b: 2 }]], 'bar']];
console.log(countInArray(arr, (e) => typeof e === 'number'));
