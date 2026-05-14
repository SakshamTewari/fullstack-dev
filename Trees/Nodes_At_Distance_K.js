/*
Given the root of a binary tree, the value of a target node target, and an integer k. Return an array of the values of all nodes that have a distance k from the target node. 
The answer can be returned in any order (N represents null).

Input:root = [3, 5, 1, 6, 2, 0, 8, N, N, 7, 4] , target = 5, k = 2
Output:[7,4,1]
Explanation:The nodes that are a distance 3 from the target node (with value 5) have values 7 , 4 and 1.
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

function nodesAtDistanceK(root, target, k) {
  if (!root) return [];

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

  // BFS from target
  queue = [targetNode];
  let visited = new Set();
  visited.add(targetNode);
  let distance = 0;

  while (queue.length) {
    if (distance === k) return queue.map((node) => node.val);

    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      // left
      if (node.left && !visited.has(node.left)) {
        visited.add(node.left);
        queue.push(node.left);
      }

      // right
      if (node.right && !visited.has(node.right)) {
        visited.add(node.right);
        queue.push(node.right);
      }

      // parent
      let parent = parentMap.get(node);
      if (parent && !visited.has(parent)) {
        visited.add(parent);
        queue.push(parent);
      }
    }
    distance++;
  }
  return [];
}

// Test
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log(nodesAtDistanceK(root, 5, 2));
