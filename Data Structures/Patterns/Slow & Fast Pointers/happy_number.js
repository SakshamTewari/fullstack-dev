// Leetcode-202

function happyNumber(n) {
  let slow = n;
  let fast = n;

  do {
    slow = sum(slow);
    fast = sum(sum(fast));
  } while (slow !== fast);

  return slow === 1;

  function sum(n) {
    let sum = 0;

    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }
}

// Test

console.log(happyNumber(19));
