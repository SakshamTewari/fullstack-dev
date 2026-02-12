/*
Given a binary tree, flatten it into linked list in-place. Usage of auxiliary data structure is not allowed.
After flattening, left of each node should point to NULL and right should contain next node in preorder.
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function flatten(root) {
  let prev = null;

  function dfs(node) {
    if (!node) return;

    dfs(node.right);
    dfs(node.left);

    node.right = prev;
    node.left = null;
    prev = node;
  }
  dfs(root);
}

// Helper to print flattened tree
function printRightChain(node) {
  while (node) {
    console.log(node.val);
    if (node.left !== null) {
      console.log("ERROR: Left is not null!");
      break;
    }
    node = node.right;
  }
}

// Test

// Build the tree
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(5, null, new TreeNode(6)),
);

flatten(root);
printRightChain(root);
