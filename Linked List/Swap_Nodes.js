/*
Given a singly linked list, the task is to swap linked list elements pairwise.

Examples:

Input : 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> NULL 
Output : 2 -> 1 -> 4 -> 3 -> 6 -> 5 -> NULL
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function swapNodes(head) {
  let curr = head;

  while (curr !== null && curr.next !== null) {
    [curr.data, curr.next.data] = [curr.next.data, curr.data];
    curr = curr.next.next;
  }
}

function swapNodesRecursive(head) {
  if (head === null || head.next === null) return;
  [head.data, head.next.data] = [head.next.data, head.data];
  swapNodesRecursive(head.next.next);
}

function printList(head) {
  let curr = head;
  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
}

// Test
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

swapNodes(head);

printList(head);

swapNodesRecursive(head);

printList(head);
