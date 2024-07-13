/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2]
Output: [2,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null || head.next == null) return head;

  //0 <-1 2-3-4 5
  let prev = null;
  let curr = head;
  while (curr != null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
};
