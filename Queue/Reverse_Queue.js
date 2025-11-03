/*
Given a queue q[], reverse the queue so that the front element becomes the rear and the rear element becomes the front, while preserving the order of the remaining elements accordingly.

Examples: 

Input: q[] = [5, 10, 15, 20, 25]
Output: [25, 20, 15, 10, 5]
Explanation: The original front 5 moves to the rear, and the rear 25 becomes the new front. All other elements follow the reversed order.

Input: q[] = [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]
Explanation: The queue is reversed completely: 1 goes to the rear, and 5 moves to the front, with all intermediate elements rearranged accordingly.
*/

// Using stack
function reverseQueueUsingStack(q) {
  let stack = [];

  while (q.length > 0) {
    stack.push(q.shift());
  }

  while (stack.length > 0) {
    q.push(stack.pop());
  }

  return q;
}

// Using recursion
function reverseQueueUsingRecursion(q, i = 0, n = q.length) {
  // base case
  if (i === n) return;

  const el = q.shift();
  reverseQueueUsingRecursion(q, i + 1, n);
  q.push(el);

  return q;
}

// Test
console.log(reverseQueueUsingStack([1, 2, 3, 4, 5]));
console.log(reverseQueueUsingRecursion([1, 2, 3, 4, 5]));
