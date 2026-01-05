/*
Detect Cycle in Linked List

Given the head of a singly linked list, determine whether the list contains a cycle.
A cycle exists if, while traversing the list through next pointers, you encounter a node that has already been visited instead of eventually reaching nullptr.
*/
class Node {
  constructor(data) {
    this.data = data;
    this.null = null;
  }
}

// Floyd's Cycle Finding Algorithm

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Using Set

function hasCycleSet(head) {
  let visited = new Set();

  while (head !== null) {
    if (visited.has(head)) return true;
    visited.add(head);
    head = head.next;
  }
  return false;
}

// Test
let head = new Node(10);
head.next = new Node(12);
head.next.next = new Node(14);
head.next.next.next = new Node(16);
head.next.next.next = head;

console.log(hasCycle(head));
