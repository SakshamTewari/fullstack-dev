/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function isSymmetric(root) {
  if (!root) return true;

  function isMirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    if (t1.val !== t2.val) return false;

    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
  }

  return isMirror(root.left, root.right);
}

// Test

const tree1 = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3)),
);

console.log(isSymmetric(tree1));
