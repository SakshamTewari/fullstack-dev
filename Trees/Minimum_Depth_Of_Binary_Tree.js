/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function minDepth(root) {
  if (!root) return 0;

  // also a case where if only left or right is present, so we need to go down the other
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);

  // both children present
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

// Test

const tree = new TreeNode(
  2,
  null,
  new TreeNode(
    3,
    null,
    new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))),
  ),
);

console.log(minDepth(tree));
