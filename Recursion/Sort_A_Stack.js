/*
 You are given a stack of integers. Your task is to sort the stack in descending order using recursion, such that the top of the stack contains the greatest element. 
 You are not allowed to use any loop-based sorting methods (e.g., quicksort, mergesort). 
 You may only use recursive operations and the standard stack operations (push, pop, peek/top, and isEmpty).
*/

function sortStack(stack) {
  // base
  if (stack.length === 0 || stack.length === 1) return;

  let temp = stack.pop();
  sortStack(stack);
  insert(stack, temp);
  return stack;
}

function insert(stack, temp) {
  //base
  if (stack.length === 0 || stack[stack.length - 1] <= temp) {
    stack.push(temp);
    return;
  }

  let topElement = stack.pop();
  insert(stack, temp);
  stack.push(topElement);
}

// Test
console.log(sortStack([1, 4, 2, 5, 3]));
