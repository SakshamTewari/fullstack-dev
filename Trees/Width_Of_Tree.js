/*
Given a Binary Tree, return its maximum width. 

Input: Binary Tree: 1 2 3 5 6 -1 9
Output: Maximum Width: 4
Explanation: Level 3 is the widest level of the Binary Tree and whose end-to-end width is 4 comprising of nodes: {5, 6, null, 9}.
*/

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left | null;
    this.right = right | null;
  }
}

function widthOfTree(root) {
  if (!root) return 0;
  let maxWidth = 0;
  let queue = [[root, 0]]; //[node, index]

  // BFS loop
  while (queue.length) {
    let size = queue.length;
    let minIndex = queue[0][1];
    let first = 0,
      last = 0;

    for (let i = 0; i < size; i++) {
      let [node, index] = queue.shift();
      let currIndex = index - minIndex;

      // first node of level
      if (i === 0) first = currIndex;
      // last node
      if (i === size - 1) last = currIndex;

      // assign index to left and right child
      if (node.left) queue.push([node.left, 2 * currIndex + 1]);
      if (node.left) queue.push([node.left, 2 * currIndex + 2]);
    }
    maxWidth = Math.max(maxWidth, last - first + 1);
  }
  return maxWidth;
}

// Test

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(widthOfTree(root));
