/*
Given a rod of length n, the task is to cut the rod in such a way that the total number of segments of length x, y, and z is maximized. 
The segments can only be of length x, y, and z. 
Note: If no segment can be cut then return 0.

Examples: 

Input: n = 4, x = 2, y = 1, z = 1
Output: 4
Explanation: Total length is 4, and the cut lengths are 2, 1 and 1.  We can make maximum 4 segments each of length 1.

Input: n = 5, x = 5, y = 3, z = 2
Output: 2
Explanation: Here total length is 5, and the cut lengths are 5, 3 and 2. We can make two segments of lengths 3 and 2.

Input: n = 7, x = 8, y = 9, z = 10
Output: 0
Explanation: Here the total length is 7, and the cut lengths are 8, 9, and 10. We cannot cut the segment into lengths that fully utilize the segment, so the output is 0.
*/

function maximizeSegments(n, x, y, z, memo = {}) {
  // base case
  if (n === 0) return 0;
  if (n < 0) return -Infinity;

  if (n in memo) return memo[n];

  const a = 1 + maximizeSegments(n - x, x, y, z, memo);
  const b = 1 + maximizeSegments(n - y, x, y, z, memo);
  const c = 1 + maximizeSegments(n - z, x, y, z, memo);

  memo[n] = Math.max(a, b, c);
  return memo[n];
}

// Test
console.log(maximizeSegments(5, 2, 1, 1));
