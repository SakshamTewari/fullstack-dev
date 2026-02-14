/*
Given a Binary Tree, perform the boundary traversal of the tree. 
The boundary traversal is the process of visiting the boundary nodes of the binary tree in the anticlockwise direction, starting from the root.
*/

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left | null;
    this.right = right | null;
  }
}

function boundaryTraversal(root) {
  let res = [];

  if (!root) return res;

  if (!isLeaf(root)) res.push(root.val);

  // add left boundary
  addLeftBoundary(root.left, res);
  // add Leaf nodes
  addLeaf(root, res);
  // add right boundary
  addRightBoundary(root.right, res);

  return res;

  function isLeaf(node) {
    return !node.left && !node.right;
  }

  function addLeftBoundary(node, res) {
    if (!node || isLeaf(node)) return;
    res.push(node.val);
    if (node.left) addLeftBoundary(node.left, res);
    else if (node.right) addLeftBoundary(node.right, res);
  }

  function addLeaf(node, res) {
    if (!node) return;
    if (isLeaf(node)) res.push(node.val);
    addLeaf(node.left, res);
    addLeaf(node.right, res);
  }

  function addRightBoundary(node, res) {
    if (!node || isLeaf(node)) return;
    if (node.right) addRightBoundary(node.right, res);
    else if (node.left) addRightBoundary(node.left, res); // But what if a node does NOT have a right child? Then the boundary must continue through the only available child, which is the left.
    res.push(node.val);
  }
}

// Test

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);

root.left.right.left = new Node(8);
root.left.right.right = new Node(9);

console.log(boundaryTraversal(root));
