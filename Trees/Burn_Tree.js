/*
Given a target node data and a root of binary tree. If the target is set on fire, determine the shortest amount of time needed to burn the entire binary tree. 
It is known that in 1 second all nodes connected to a given node get burned. That is its left child, right child, and parent.

Input : root = [1, 2, 3, 4, null, 5, 6, null, 7]. target = 1
Output : 3
Explanation :The node with value 1 is set on fire.
In 1st second it burns node 2 and node 3.
In 2nd second it burns nodes 4, 5, 6.
In 3rd second it burns node 7.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function burnTree(root, target) {
  if (!root) return 0;

  // child -> parent mapping
  let parentMap = new Map();
  let targetNode = null;

  // BFS: to store parents
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if (node.val === target) targetNode = node;
    if (node.left) {
      parentMap.set(node.left, node);
      queue.push(node.left);
    }
    if (node.right) {
      parentMap.set(node.right, node);
      queue.push(node.right);
    }
  }

  // DFS: to burn
  let visited = new Set();
  queue = [targetNode];
  visited.add(targetNode);
  let time = 0;

  while (queue.length) {
    let size = queue.length;
    let burned = false;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      // left
      if (node.left && !visited.has(node.left)) {
        visited.add(node.left);
        queue.push(node.left);
        burned = true;
      }
      // right
      if (node.right && !visited.has(node.right)) {
        visited.add(node.right);
        queue.push(node.right);
        burned = true;
      }
      // parent
      let parent = parentMap.get(node);
      if (parent && !visited.has(parent)) {
        visited.add(parent);
        queue.push(parent);
        burned = true;
      }
    }

    if (burned) time++;
  }

  return time;
}

// Test

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.left.left.left = new TreeNode(7);

console.log(burnTree(root, 1));
