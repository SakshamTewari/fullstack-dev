/*

*/

function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - k;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    // Compare distance of window edges to x
    const distLeft = x - arr[mid];
    const distRight = arr[mid + k] - x;

    if (distLeft > distRight) {
      // move right
      left = mid + 1;
    } else {
      // move left
      right = mid;
    }
  }

  // return closest k elements from the best 'left' position
  return arr.slice(left, left + k);
}

// Test
console.log(findClosestElements([1, 2, 3, 4, 5, 6], 4, 3));
