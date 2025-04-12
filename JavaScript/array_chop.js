/* Chop Array into chunks of given length and return each chunk as an array without modifying the input array

    - use a normal function (take input, return output)
    - extend Javascript array

*/

/*
SLICE

const arr = [1, 2, 3, 4, 5];
const result = arr.slice(1, 4);
console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] → original remains


Does not modify the original array.
Returns a shallow copy from start (inclusive) to end (exclusive).
Can be used on arrays or strings.


SPLICE

const arr = [1, 2, 3, 4, 5];
const result = arr.splice(1, 2); // remove 2 elements from index 1
console.log(result); // [2, 3]
console.log(arr);    // [1, 4, 5] → original changed!

You can also use it to insert elements:

arr.splice(1, 0, 9); // insert 9 at index 1
console.log(arr);    // [1, 9, 4, 5]

Parameters:

start: index to begin at

deleteCount: how many elements to remove

...items: optional items to insert


 */
const arr = [1, 2, 3, 4, 5, 6];

const chop = (arr, chunkSize) => {
  const temp = [...arr];
  const output = [];

  let i = 0;
  while (i < temp.length) {
    output.push(temp.slice(i, i + chunkSize));
    i += chunkSize;
  }
  return output;
};

console.log(chop(arr, 2));

Array.prototype.chop = function (chunkSize) {
  const temp = [...arr];
  const output = [];

  let i = 0;
  while (i < temp.length) {
    output.push(temp.slice(i, i + chunkSize));
    i += chunkSize;
  }
  return output;
};
console.log(arr.chop(2));
