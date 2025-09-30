function recursiveSort(arr) {
  // base case : array size 0 or 1 is already sorted
  if (arr.length <= 1) return;

  let temp = arr.pop(); // remove last element
  recursiveSort(arr);
  insert(arr, temp); // insert removed element back
  return arr;
}

function insert(arr, temp) {
  // base case: empty array or last element <= temp
  if (arr.length === 0 || arr[arr.length - 1] <= temp) {
    arr.push(temp);
    return;
  }
  let lastElement = arr.pop();
  insert(arr, temp);
  arr.push(lastElement);
}

// Test
console.log(recursiveSort([1, 5, 0, 2]));
