function searchBitonic(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  // Find peak
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let peak = left;

  // Search in ascending part (0 → peak)
  left = 0;
  right = peak;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  // Search in descending part (peak+1 → end)
  left = peak + 1;
  right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) left = mid + 1; // reversed logic
    else right = mid - 1;
  }

  return -1;
}

// Test
console.log(searchBitonic([1, 3, 8, 12, 4, 2], 4));
console.log(searchBitonic([1, 3, 8, 12, 4, 2], 12));
