/*
Given a Binary Search Tree and a key value return the node in the BST having data equal to ‘key’ otherwise return nullptr.

Input :8 5 12 4 7 10 14 -1 -1 6 -1 -1 -1 13 -1, Key = 10
Output :True

            8
          /   \
         5     12
        / \    / \
       4   7  10 14
          /        /
         6        13
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function searchBST(root, key) {
  let curr = root;

  while (curr !== null) {
    if (curr.val === key) return true;
    else if (curr.val > key) curr = curr.left;
    else curr = curr.right;
  }
  return false;
}

// Test
let root = new TreeNode(8);
root.left = new TreeNode(5);
root.right = new TreeNode(12);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(14);
root.left.right.left = new TreeNode(6);
root.right.right.left = new TreeNode(13);

console.log(searchBST(root, 10));
