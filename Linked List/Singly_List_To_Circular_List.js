/*
Given a singly linked list, the task is to convert it into a circular linked list.
*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function singlyToCircular(head) {
  if (head === null) return null;
  if (head.next === null) return head;
  let tail = head;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = head;
  return head;
}

function printList(head) {
  let curr = head;

  do {
    console.log(curr.data + " ");
    curr = curr.next;
  } while (curr !== head);
}

// Test
let head = new Node(10);
head.next = new Node(12);
head.next.next = new Node(14);
head.next.next.next = new Node(16);
singlyToCircular(head);
printList(head);
