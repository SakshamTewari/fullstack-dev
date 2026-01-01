/*
Flattening an array is simple process of merging different N dimensional sub arrays to form a single array.
*/

const flattenUsingArray = function (arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

const flatten = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
};

// Test
console.log(
  flatten([
    [[1, [1.1]], 2, 3],
    [4, 5],
  ])
);
