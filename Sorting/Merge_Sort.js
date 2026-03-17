/*
Break → until single elements  
Merge → in sorted order
*/

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  // divide
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // merge both halves
  return merge(left, right);

  function merge(left, right) {
    let result = [];
    let i = 0,
      j = 0;

    // compare both arrays
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    // push remaining elements
    result.push(...left.slice(i));
    result.push(...right.slice(j));
    return result;
  }
}

// Test
console.log(mergeSort([1, 4, 2, 6, 3]));
