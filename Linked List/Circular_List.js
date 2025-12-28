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

/*
Given the head of a singly linked list, the task is to find if given linked list is circular or not. 
A linked list is called circular if its last node points back to its first node.
Note: The linked list does not contain any internal loops.
*/
function isCircularList(head) {
  if (head === null) return true;
  let current = head;
  while (current !== null) {
    if (current.next === head) return true;
    current = current.next;
  }
  return false;
}

/*
Given a circular linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list.
*/

function circularListLength(head) {
  if (head === null) return 0;
  let count = 0;
  let current = head;
  do {
    current = current.next;
    count++;
  } while (current !== head);
  return count;
}

// Test
let head = new Node(11);
head.next = new Node(2);
head.next.next = new Node(56);
head.next.next.next = new Node(12);
head.next.next.next.next = head;
printCircularList(head);

console.log(isCircularList(head));
console.log(circularListLength(head));
