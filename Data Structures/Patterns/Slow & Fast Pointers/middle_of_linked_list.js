// Leetcode-876

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function middleOfLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Test

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(middleOfLinkedList(head));
