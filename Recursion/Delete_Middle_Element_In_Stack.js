function deleteMiddle(stack, k = Math.floor(stack.length / 2)) {
  // base
  if (k === 0) {
    stack.pop();
    return;
  }

  let topElement = stack.pop();
  deleteMiddle(stack, k - 1);
  stack.push(topElement);
  return stack;
}

// Test
console.log(deleteMiddle([1, 2, 3, 4, 5]));
