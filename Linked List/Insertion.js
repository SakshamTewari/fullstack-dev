/*
Given a linked list and an integer value val, insert a new node with that value at the beginning (before the head) of the list and return the updated linked list.

Input: 0->1->2, val = 5 
Output: 5->0->1->2
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function insertAtHead(head, val) {
  let newNode = new Node(val);
  newNode.next = head;
  return newNode;
}

function printList(head) {
  let result = "";
  let curr = head;

  while (curr !== null) {
    result += curr.val + "->";
    curr = curr.next;
  }
  result += "NULL";
  console.log(result);
}

// Test
let head = new Node(0);
head.next = new Node(1);
head.next.next = new Node(2);

head = insertAtHead(head, 5);
printList(head);
