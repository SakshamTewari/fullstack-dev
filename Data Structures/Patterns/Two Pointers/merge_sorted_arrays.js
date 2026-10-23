// Leetcode-88

function mergeSortedArrays(nums1, m, nums2, n) {
  let i = 0,
    j = 0,
    res = 0,
    result = [];

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      result[res++] = nums1[i++];
    } else {
      result[res++] = nums2[j++];
    }
  }

  // if any of i or j is out of range
  while (j < n) {
    result[res++] = nums2[j++];
  }

  while (i < m) {
    result[res++] = nums1[i++];
  }

  return result;
}

// Test
nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
nums2 = [2, 5, 6];
let n = 3;

console.log(mergeSortedArrays(nums1, m, nums2, n));
