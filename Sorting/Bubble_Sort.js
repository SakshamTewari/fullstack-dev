/*
    Largest element 'bubbles up' to the end of array in each iteration.
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // since last element is always sorted, we go till arr.length - 1 - i
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Test
console.log(bubbleSort([3, 2, 4, 1, 5, 2]));
