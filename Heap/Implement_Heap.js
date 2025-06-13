/*
leftChild = heap[2*i]
rightChild = heap[2*i+1]
parent = heap[Math.floor(i/2)]
*/

class Heap {
  constructor() {
    this.heap = [];
    this.heap.push(0); // to make it 1-indexed
  }

  push(val) {
    this.heap.push(val);

    let i = this.heap.length - 1;
    // Percolate up
    while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
      // swap with parent
      let temp = this.heap[i];
      this.heap[i] = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = temp;
      i = Math.floor(i / 2);
    }
  }

  pop() {
    if (this.heap.length <= 1) return null;
    if (this.heap.length === 2) return this.heap.pop();

    let res = this.heap[1];
    this.heap[1] = this.heap.pop(); // move last value to root

    let i = 1;
    // Percolate down
    while (2 * i < this.heap.length) {
      if (
        2 * i + 1 < this.heap.length &&
        this.heap[2 * i + 1] < this.heap[2 * i] &&
        this.heap[i] > this.heap[2 * i + 1]
      ) {
        // swap with right child
        let temp = this.heap[i];
        this.heap[i] = this.heap[2 * i + 1];
        this.heap[2 * i + 1] = temp;
        i = 2 * i + 1;
      } else if (this.heap[i] > this.heap[2 * i]) {
        // swap with left child
        let temp = this.heap[i];
        this.heap[i] = this.heap[2 * i];
        this.heap[2 * i] = temp;
        i = 2 * i;
      } else {
        break; // heap property is satisfied
      }
    }
    return res;
  }

  heapify(arr) {
    arr.push(arr[0]); //  0th position val moved to the end to make it 1-indexed

    this.heap = arr;
    let curr = Math.floor((this.heap.length - 1) / 2);

    while (curr > 0) {
      let i = curr;
      // Percolate down
      while (2 * i < this.heap.length) {
        if (
          2 * i + 1 < this.heap.length &&
          this.heap[2 * i + 1] < this.heap[2 * i] &&
          this.heap[i] > this.heap[2 * i + 1]
        ) {
          // swap with right child
          let temp = this.heap[i];
          this.heap[i] = this.heap[2 * i + 1];
          this.heap[2 * i + 1] = temp;
          i = 2 * i + 1;
        } else if (this.heap[i] > this.heap[2 * i]) {
          // swap with left child
          let temp = this.heap[i];
          this.heap[i] = this.heap[2 * i];
          this.heap[2 * i] = temp;
          i = 2 * i;
        } else {
          break; // heap property is satisfied
        }
      }
      curr--; // move to the parent;
    }
    return;
  }
}
