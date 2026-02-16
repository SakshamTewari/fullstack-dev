/*
You are given a stack of integers. Your task is to reverse the stack using recursion. You may only use standard stack operations (push, pop, top/peek, isEmpty). 
You are not allowed to use any loop constructs or additional data structures like arrays or queues.

Your solution must modify the input stack in-place to reverse the order of its elements.
*/

function reverseStack(stack) {
  // base
  if (stack.length === 0) return;
  let topElement = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack, topElement);
  return stack;
}

function insertAtBottom(stack, element) {
  // base
  if (stack.length === 0) {
    stack.push(element);
    return;
  }

  let topElement = stack.pop();
  insertAtBottom(stack, element);
  stack.push(topElement);
}

// Test
console.log(reverseStack([1, 2, 3, 4, 5, 6]));
