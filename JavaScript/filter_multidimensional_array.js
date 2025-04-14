/* Custom Array.prototype.filter() implementation
  
    -can handle nested arrays (using recursion)
  
 */

const filter = (arr, test) => {
  const result = [];

  for (let a of arr) {
    if (Array.isArray(a)) {
      //recursively filter the sub-array
      const out = filter(a, test); //result of that recursive call is a filtered sub-array
      result.push(out);
    } else {
      if (test(a)) {
        result.push(a);
      }
    }
  }
  return result;
};

const isString = (x) => typeof x === 'string';
const arr = [1, 'a', [2, 3, 'b', [4, 5, 'c']], 6, 'd', [7, 8]];

const filterList = filter(arr, isString);
console.log(filterList);

// Extend this method and implement a multiFilter on array's prototype

Array.prototype.multiFilter = function (test) {
  const originalArray = this;

  const filter = (arr, test) => {
    const result = [];

    for (let a of arr) {
      if (Array.isArray(a)) {
        //recursively filter the sub-array
        const out = filter(a, test); //result of that recursive call is a filtered sub-array
        result.push(out);
      } else {
        if (test(a)) {
          result.push(a);
        }
      }
    }
    return result;
  };

  return filter(originalArray, test);
};
