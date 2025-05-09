/*
Given a number n. The task is to generate all binary numbers with decimal values from 1 to n.

Examples:

Input: n = 2
Output: ["1", "10"]
Explanation: Binary numbers from 1 to 2 are 1 and 10.

Input: n = 5
Output: ["1", "10", "11", "100", "101"]
Explanation: Binary numbers from 1 to 5 are 1 , 10 , 11 , 100 and 101.
*/

function generateBinaryNumbers(n) {
  const result = [];
  const queue = ['1'];

  while (result.length < n) {
    const current = queue.shift(); // front of the queue
    result.push(current);
    queue.push(current + '0');
    queue.push(current + '1');
  }

  return result;
}

// Test
console.log(generateBinaryNumbers(10));
