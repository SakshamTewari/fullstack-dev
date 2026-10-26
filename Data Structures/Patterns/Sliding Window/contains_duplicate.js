// Leetcode-219

function containsDuplicate(nums, k) {
  let i = 0,
    j = 0;
  let window = new Set();

  while (j < nums.length) {
    if (window.has(nums[j])) {
      return true;
    }

    window.add(nums[j]);

    j++;

    if (j - i > k) {
      // difference of indices must be at most k  (k is not the size of window actually)
      window.delete(nums[i]);
      i++;
    }
  }
  return false;
}

// Test

console.log(containsDuplicate([1, 2, 3, 1], 3));
