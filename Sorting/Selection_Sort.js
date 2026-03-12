/*
Repeatedly select the smallest element from the unsorted part of the array and place it at the beginning.

Think of it like this:
    Divide the array into sorted and unsorted parts.
    Find the minimum element in the unsorted part.
    Swap it with the first element of the unsorted part.
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

// Test
console.log(selectionSort([12, 11, 14, 13, 10]));
