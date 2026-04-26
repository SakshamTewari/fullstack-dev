/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3, 9, 20, null, null, 15, 7]  
Output: [ [3], [9, 20], [15, 7] ]  
*/
class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

// Level Order Traversal

function levelOrder(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length) {
    let size = queue.length; // this is important as queue.length keeps on changing inside for loop;
    let level = [];

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      level.push(curr.val);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(level);
  }
  return result;
}

// Build tree

function buildTree(arr) {
  if (!arr.length || arr[0] === null) return null;

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (i < arr.length) {
    let current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Test
let root = buildTree([3, 9, 20, null, null, 15, 7]);
// console.log(root);
console.log(levelOrder(root));
