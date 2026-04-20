/*
Given a Binary Search Tree and a key, return the floor of the given key in the Binary Search Tree.
Floor of a value refers to the value of the largest node in the Binary Search Tree that is smaller than or equal to the given key. If the floor node does not exist, return nullptr.

Input : Binary Search Tree: 10 5 15 2 6 -1 -1, Key = 7
Output : 6
Explanation :  In the given BST, the largest value smaller or equal to 7 is 6.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function floorInBST(root, key) {
  let curr = root;
  let floor = null;

  while (curr !== null) {
    if (curr.val === key) return curr.val;
    else if (curr.val > key) curr = curr.left;
    else {
      floor = curr.val; // possible floor, but check right
      curr = curr.right;
    }
  }
  return floor;
}

// Test
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(6);

console.log(floorInBST(root, 7));
