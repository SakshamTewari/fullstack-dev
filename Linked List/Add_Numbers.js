/*
Add two numbers represented as Linked Lists.

Example 1:
Input: num1 = 243, num2 = 564
Output:sum = 807; L = [7,0,8]
Explanation: Since the digits are stored in reverse order, reverse the numbers first to get the or original number and then add them as → 342 + 465 = 807.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function addTwoNumbers(head1, head2) {
  let dummy = new Node(0);
  let curr = dummy;
  let carry = 0;

  while (head1 !== null || head2 !== null || carry) {
    let sum = head1.value + head2.value + carry;
    carry = Math.floor(sum / 10);
    curr.next = new Node(sum % 10);
    curr = curr.next;

    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }
  return dummy.next;
}

// Test
let head1 = new Node(5);
head1.next = new Node(4);
head1.next.next = new Node(3);

let head2 = new Node(5);
head2.next = new Node(4);
head2.next.next = new Node(2);

console.log(addTwoNumbers(head1, head2));
