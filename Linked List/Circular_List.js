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

/*
Delete a node from a circular linked list
*/

function deleteNode(head, key) {
  if (head === null) return null;

  // Single node
  if (head.next === head) {
    if (head.data === key) {
      return null;
    }
    return head;
  }

  let curr = head,
    prev = null;
  // Head to be deleted
  if (head.data === key) {
    // find last node
    while (curr.next !== head) {
      curr = curr.next;
    }
    // curr = last node
    curr.next = head.next;
    head = head.next;
    return head;
  }

  // Non-head to be deleted
  prev = head;
  curr = head.next;
  while (curr !== head) {
    if (curr.data === key) {
      prev.next = curr.next;
      return head;
    }
    prev = curr;
    curr = curr.next;
  }
  return head; // key not found
}

/*
Exchange the first and the last node. 
The task should be done with only one extra node, you can not declare more than one extra node, and also you are not allowed to declare any other temporary variable. 

Note: Extra node means the need of a node to traverse a list.
*/

function exchangeNode(head) {
  {
    if (head === null || head.next === head) {
      return head;
    }
    // one extra node pointer
    let temp = head;

    // move temp to node before last
    while (temp.next.next !== head) {
      temp = temp.next;
    }

    let last = temp.next;

    // swap
    temp.next = head;
    last.next = head.next;
    head.next = last;

    head = last;

    return head;
  }
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

// console.log("After deletion--------");
// console.log(deleteNode(head, 2));
// printCircularList(head);

console.log("After exchange--------");
head = exchangeNode(head); // <---------------  this is important as function does not change variables as head inside function is just a copy that references to head outside
printCircularList(head);
