/*
Given a root of the Binary Tree, find its Level Order Traversal.

Level Order Traversal technique is a method to traverse a Tree such that all nodes present in the same level are traversed completely before traversing the next level.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

function levelOrder(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

// Test
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

console.log(levelOrder(root));
