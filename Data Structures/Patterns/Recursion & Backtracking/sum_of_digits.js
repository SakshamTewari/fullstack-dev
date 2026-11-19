// GFG - https://www.geeksforgeeks.org/problems/sum-of-digits1742/1

function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// Test

console.log(sumOfDigits(12));
