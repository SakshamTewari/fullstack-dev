/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function isSameTree(p, q) {
  if (!p && !q) return true; // both empty
  if (!p || !q) return false; // one is null and other isn't
  if (p.val !== q.val) return false; // node value different

  // recursively checking for left and right
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Test
const tree1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(5)),
  new TreeNode(3),
);
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(tree1, tree2)); // false

const tree3 = new TreeNode(1, new TreeNode(2));
const tree4 = new TreeNode(1, null, new TreeNode(2));

console.log(isSameTree(tree3, tree4)); // false
