/*
Take the next element (key) and compare it with the sorted left side.
Shift larger elements right and insert the key in its correct position.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Test
console.log(insertionSort([1, 5, 4, 2, 3]));
