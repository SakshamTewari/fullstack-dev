/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function hasCycleTraversal(head) {
  let temp = head;
  let map = new Map();

  while (temp !== null) {
    if (map.has(temp)) return true;
    map.set(temp, true);
    temp = temp.next;
  }
  return false;
}

function hasCycle(head) {
  let slow = head,
    fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) return true;
  }
  return false;
}

/*
Given the head of a linked list that may contain a cycle, return the starting point of that cycle. If there is no cycle in the linked list return null.
*/
function startOfCycle(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;

      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}

/*
Given the head of a linked list, determine the length of a loop present in the linked list. If there's no loop present, return 0.
*/
function lengthOfLoopTraversal(head) {
  let temp = head;
  let visited = new Map();
  let length = 1;

  while (temp !== null) {
    if (visited.has(temp)) {
      return length - visited.get(temp);
    }
    visited.set(temp, length);
    temp = temp.next;
    length++;
  }
  return 0;
}

function lengthOfLoopFastSlow(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let length = 1;
      while (slow.next !== fast) {
        slow = slow.next;
        length++;
      }
      return length;
    }
  }
  return 0;
}

// Test

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node2;
console.log(hasCycle(node1));
console.log(hasCycleTraversal(node1));

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);

// Create cycle: last node connects to node with value 2
head.next.next.next.next = head.next;
console.log(startOfCycle(head));
console.log(lengthOfLoopTraversal(head));
console.log(lengthOfLoopFastSlow(head));
