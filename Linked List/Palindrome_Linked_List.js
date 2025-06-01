/*
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function isPalindrome(head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;

  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // compare
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}

// Test

let node5 = new ListNode(1);
let node4 = new ListNode(2, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);
console.log(isPalindrome(node1));
