/*
Given a number n, check whether it’s prime number or not using recursion.

Input : n = 11
Output : Yes

Input : n = 15
Output : No
*/

function isPrime(n, divisor = 2) {
  if (n <= 2) return n === 2 ? true : false;
  if (n % divisor === 0) return false;
  if (divisor * divisor > n) return true;

  return isPrime(n, divisor + 1);
}

// Test
console.log(isPrime(15));
