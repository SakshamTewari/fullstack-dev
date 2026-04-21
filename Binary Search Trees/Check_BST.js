/*
    Check if a tree is BST or not
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

// Recursion

function isBSTRecursive(root, min = -Infinity, max = Infinity) {
  if (root === null) return true;
  if (root.val <= min || root.val >= max) return false;

  return isBST(root.left, min, root.val) && isBST(root.right, root.val, max);
}

// Inorder

function isBSTInorder(root) {
  let prev = -Infinity;

  function inorder(node) {
    if (!node) return true;
    if (!inorder(root.left)) return false;

    if (node.val <= prev) return false;
    prev = node.val;

    return inorder(node.right);
  }
  return inorder(root);
}
