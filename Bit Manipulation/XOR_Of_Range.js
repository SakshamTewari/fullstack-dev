/*
Given two integers L and R. Find the XOR of the elements in the range [L , R].

Input : L = 3 , R = 5
Output : 2
Explanation : answer = (3 ^ 4 ^ 5) = 2.
*/

function RangeXOR(L, R) {
  let ans = 0;

  for (let i = L; i <= R; i++) {
    ans ^= i;
  }

  return ans;
}

// Optimal approach : O(1)

function RangeXOROptimal(L, R) {
  function XOR1ToN(n) {
    if (n % 4 === 0) return n;
    if (n % 4 === 1) return 1;
    if (n % 4 === 2) return n + 1;
    return 0;
  }

  return XOR1ToN(R) ^ XOR1ToN(L - 1);
}

// Test
console.log(RangeXOR(3, 5));
console.log(RangeXOROptimal(3, 5));
