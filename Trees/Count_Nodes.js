/*
Given a Complete Binary Tree, count and return the number of nodes in the given tree. 
A Complete Binary Tree is a binary tree in which all levels are completely filled, except possibly for the last level, and all nodes are as left as possible.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

// O(n)

function countNodes(root) {
  if (!root) return 0;

  let count = 0;

  function dfs(node) {
    if (!node) return;

    count++;

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  return count;
}

// Test
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(countNodes(root));
