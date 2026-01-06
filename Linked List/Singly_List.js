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

/*
Length of cycle in Linked List
Given the head of a singly linked list, determine the length of the cycle (loop) if one exists. 
A cycle occurs when a node's next pointer points to a previously visited node in the list. If no cycle is present, return 0.
*/
function cycleLength(head) {
  let slow = head;
  let fast = head;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let length = 1;
      let current = slow;
      while (current.next !== slow) {
        length++;
        current = current.next;
      }
      return length;
    }
  }
  return 0;
}

// Test
let head = new Node(10);
head.next = new Node(12);
head.next.next = new Node(14);
head.next.next.next = new Node(16);
head.next.next.next = head;

console.log(hasCycle(head));

console.log(cycleLength(head));
