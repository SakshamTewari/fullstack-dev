/*
You have been given a non-empty grid ‘mat’ with 'n' rows and 'm' columns consisting of only 0s and 1s. 
All the rows are sorted in ascending order. Your task is to find the index of the row with the maximum number of ones. 
Note: If two rows have the same number of ones, consider the one with a smaller index. 
If there's no row with at least 1 zero, return -1

Input Format: n = 3, m = 3, 
mat[] = 
1 1 1
0 0 1
0 0 0
Result: 0
Explanation: The row with the maximum number of ones is 0 (0 - indexed).
*/

function rowWithMax1s(mat, n, m) {
  let maxCount = 0;
  let ans = -1;

  for (let i = 0; i < n; i++) {
    let firstIndex = findFirstOne(mat[i], 1);
    if (firstIndex < m) {
      let count = m - firstIndex;

      if (count > maxCount) {
        maxCount = count;
        ans = i;
      }
    }
  }
  return ans;
}

function findFirstOne(arr, target) {
  let low = 0,
    high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}

// Test
console.log(
  rowWithMax1s(
    [
      [1, 1, 1, 1],
      [0, 1, 1, 1],
      [0, 0, 0, 1],
    ],
    3,
    4,
  ),
);
