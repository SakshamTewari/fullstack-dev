// Leetcode-141

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function cycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }
  return false;
}

// Test

let head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(0);
head.next.next.next = new Node(-4);
head.next.next.next.next = head.next;

console.log(cycle(head));

// Leetcode-142

function cycleEntryPoint(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let slow = head;
      let pos = 0;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
        pos++;
      }
      return pos;
    }
  }
  `return -1;`;
}

console.log(cycleEntryPoint(head));
