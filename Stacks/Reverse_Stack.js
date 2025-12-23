/*
Reverse a Stack without using recursion and extra space. Even the functional Stack is not allowed.

Examples:  

Input : 1->2->3->4
Output : 4->3->2->1

Input :  6->5->4
Output : 4->5->6
*/

// This can only be done if stack is implemented as a linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  reverse() {
    let prev = null;
    let curr = this.top;

    while (curr !== null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.top = prev;
  }

  print() {
    let temp = this.top;
    let res = [];
    while (temp) {
      res.push(temp.data);
      temp = temp.next;
    }
    console.log(res.join("->"));
  }
}

// Test
let st = new Stack();
st.push(4);
st.push(3);
st.push(2);
st.push(1);

st.print();
st.reverse();
st.print();
