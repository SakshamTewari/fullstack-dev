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

/*
Given a Binary Tree, determine the maximum sum achievable along any path within the tree.

Input: Binary Tree: -10 9 20 -1 -1 15 7
Output: 42
Explanation: Out of all the paths possible in the Binary Tree, 15 -> 20 -> 7 has the greatest sum ie. 42.
*/

function maxPathSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    // ignore negative paths
    let leftGain = Math.max(0, dfs(node.left));
    let rightGain = Math.max(0, dfs(node.right));

    let currentPahSum = node.val + leftGain + rightGain;
    maxSum = Math.max(maxSum, currentPahSum);

    // return best gain to parent
    return node.val + Math.max(leftGain, rightGain);
  }
  dfs(root);
  return maxSum;
}

// Test

const tree = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11)),
  new TreeNode(8, new TreeNode(13), new TreeNode(4)),
);

console.log(hasPathSum(tree, 20));
console.log(maxPathSum(tree));
