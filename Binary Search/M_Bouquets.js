/*
You are given 'N’ roses and you are also given an array 'arr' where 'arr[i]' denotes that the 'ith' rose will bloom on the 'arr[i]th' day. 
You can only pick already bloomed roses that are adjacent to make a bouquet. You are also told that you require exactly 'k' adjacent bloomed roses to make a single bouquet. 
Find the minimum number of days required to make at least ‘m' bouquets each containing 'k' roses. Return -1 if it is not possible.

Input Format: N = 8, arr[] = {7, 7, 7, 7, 13, 11, 12, 7}, m = 2, k = 3
Result: 12
Explanation: On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.
*/

function minDays(arr, m, k) {
  if (m * k > arr.length) return -1;
  let low = Math.min(...arr);
  let high = Math.max(...arr);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (canMake(arr, mid, m, k)) {
      high = mid - 1; // try smaller one
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function canMake(arr, day, m, k) {
  let count = 0;
  let bouqets = 0;

  for (let bloomDay of arr) {
    if (bloomDay <= day) {
      count++;
      if (count === k) {
        bouqets++;
        count = 0;
      }
    } else {
      count = 0;
    }
  }
  return bouqets >= m;
}

// Test
console.log(minDays([7, 7, 7, 7, 13, 11, 12, 7], 2, 3));
