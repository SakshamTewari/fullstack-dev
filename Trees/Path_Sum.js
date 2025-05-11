/*
Given the root of a binary tree and an integer targetSum, 
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

Example 1:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function hasPathSum(root, targetSum) {
  if (!root) return false;

  // if leaf node, check sum
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  const remainingSum = targetSum - root.val;

  return (
    hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
  );
}

// Test

const tree = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11)),
  new TreeNode(8, new TreeNode(13), new TreeNode(4)),
);

console.log(hasPathSum(tree, 20));
