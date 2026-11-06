/*
We build a table of n rows (1-indexed). 
We start by writing 0 in the 1st row. 
Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

Example 1:

Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0

Example 2:

Input: n = 2, k = 1
Output: 0
Explanation: 
row 1: 0
row 2: 01
*/

function kthGrammar(n, k) {
  // base
  if (n === 1 && k === 1) return 0;

  let mid = Math.pow(2, n - 1) / 2;

  if (k <= mid) {
    return kthGrammar(n - 1, k); // first half is same as n-1
  } else {
    return 1 - kthGrammar(n - 1, k - mid); // we can also use +!kthGrammar(n-1, k-mid)
  }
}

// Test
console.log(kthGrammar(1, 1));
console.log(kthGrammar(3, 4));
console.log(kthGrammar(4, 5));
