/* 
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Using Recursion

function maxDepthRecursion(root) {
  if (!root) return 0;
  return (
    1 + Math.max(maxDepthRecursion(root.left), maxDepthRecursion(root.right))
  );
}

// Using Level Order Traversal
function maxDepthBFS(root) {
  if (!root) return 0;

  let queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    depth++;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return depth;
}

// Test
// const tree1 = [3, 9, 20, null, null, 15, 7];
const tree1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

console.log(maxDepthRecursion(tree1));
console.log(maxDepthBFS(tree1));
