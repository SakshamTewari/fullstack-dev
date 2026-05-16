/*
Given a root of binary tree, find the lowest common ancestor (LCA) of two given nodes (p, q) in the tree.
The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

Input:root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 4  
Output:5  
Explanation:The lowest common ancestor (LCA) of nodes 5 and 4 is node 5, as node 5 is the ancestor of node 4 in the binary tree.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function lowestCommonAncestor(root, p, q) {
  if (!root) return null;

  // found one target
  if (root.val === p || root.val === q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // if found on both sides
  if (left && right) return root;

  // if found on one side
  return left ? left : right;
}

// Test

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log(lowestCommonAncestor(root, 7, 4));
