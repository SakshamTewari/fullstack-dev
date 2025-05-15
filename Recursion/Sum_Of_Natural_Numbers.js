/*
Given a number n, find sum of first n natural numbers. To calculate the sum, we will use a recursive function recur_sum().

Input : 3
Output : 6

Input : 5
Output : 15
Explanation : 1 + 2 + 3 + 4 + 5 = 15
*/

function recur_sum(n) {
  if (n === 1) return 1;
  return n + recur_sum(n - 1);
}

// Test
console.log(recur_sum(5));
console.log(recur_sum(3));
