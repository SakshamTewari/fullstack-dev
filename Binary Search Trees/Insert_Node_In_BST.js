/*
Insert a node in BST
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

// using iteration

function insertInBSTIteration(root, key) {
  let newNode = new TreeNode(key);

  if (!root) return newNode;

  let curr = root;
  while (true) {
    if (key < curr.val) {
      if (!curr.left) {
        curr.left = newNode;
        break;
      }
      curr = curr.left;
    } else {
      if (!curr.right) {
        curr.right = newNode;
        break;
      }
      curr = curr.right;
    }
  }
  return root;
}

// using recursion

function insertInBSTRecursive(root, key) {
  if (!root) return new TreeNode(key);

  if (key < root.val) {
    root.left = insertInBSTRecursive(root.left, key);
  } else {
    root.right = insertInBSTRecursive(root.right, key);
  }
  return root;
}

// Test
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);

root = insertInBSTIteration(root, 7);
root = insertInBSTRecursive(root, 9);
root = insertInBSTIteration(root, 2);
root = insertInBSTRecursive(root, 4);

console.log(root);
