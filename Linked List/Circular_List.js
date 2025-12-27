/*
Given a circular linked list, the task is to print all the elements of this circular linked list.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function printCircularList(head) {
  if (head === null) return;

  let current = head;
  do {
    console.log(current.data + " ");
    current = current.next;
  } while (current !== head);
  console.log();
}

// Test
let head = new Node(11);
head.next = new Node(2);
head.next.next = new Node(56);
head.next.next.next = new Node(12);
head.next.next.next.next = head;
printCircularList(head);
