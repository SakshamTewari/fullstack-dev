/*
Given two arrays, greed[] and cookie[] such that greed[i] denotes the minimum cookie size wanted by ith child and cookie[i] denotes the size of ith cookie, we have to find the maximum number of children that can be satisfied by assigning them cookies, with each child getting at most 1 cookie.

Note: A child will be satisfied if he is assigned a cookie of size at least equal to his greed. In other words, the ith child will be satified with jth cookie only if greed[i] <= cookie[j].

Examples:

Input: greed[] = [1, 10, 3], cookie[] = [1, 2,3]
Output: 2
Explanation: We can only assign  cookie to the first child and third child.

Input: greed[] = [10,100], cookie[] = [1, 2]
Output: 0
Explanation: We can not assign cookies to children.
*/

function assignCookies(greed, cookie) {
  // sort both arrays
  greed.sort((a, b) => a - b);
  cookie.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  let count = 0;

  while (i < greed.length && j < cookie.length) {
    if (greed[i] <= cookie[j]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return count;
}

// Test
console.log(assignCookies([1, 10, 3], [1, 2, 3]));
