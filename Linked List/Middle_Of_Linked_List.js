/* 
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Input: head = [1,2,3,4,5]
Output: [3,4,5]

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function middleNode(head) {
  let count = 0;
  let curr = head;

  while (curr !== null) {
    curr = curr.next;
    count++;
  }

  curr = head;
  for (let i = 0; i < Math.floor(count / 2); i++) {
    curr = curr.next;
  }

  return curr;
}

/* Fast-Slow pointer method
function middleNode(head) {
  let slow = head, fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
*/

// Test
let list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);

console.log(middleNode(list));
