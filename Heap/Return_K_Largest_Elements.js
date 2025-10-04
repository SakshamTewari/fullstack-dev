/*
Given an array arr[] and an integer k, the task is to find k largest elements in the given array. 
Elements in the output array should be in decreasing order.

Examples:

Input:  [1, 23, 12, 9, 30, 2, 50], k = 3
Output: [50, 30, 23]

Input:  [11, 5, 12, 9, 44, 17, 2], k = 2
Output: [44, 17]
*/

class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeft(i) {
    return 2 * i + 1;
  }
  getRight(i) {
    return 2 * i + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[this.getParent(i)] > this.heap[i]) {
      this.swap(i, this.getParent(i));
      i = this.getParent(i);
    }
  }
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return root;
  }
  heapify(i) {
    let smallest = i;
    let left = this.getLeft(i),
      right = this.getRight(i);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapify(smallest);
    }
  }
  top() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
}

function KLargestElements(arr, k) {
  let heap = new MinHeap();
  for (let num of arr) {
    if (heap.size() < k) {
      heap.push(num);
    } else if (num > heap.top()) {
      heap.pop();
      heap.push(num);
    }
  }
  return heap.heap.reverse();
}

// Test
console.log(KLargestElements([3, 2, 1, 5, 6, 4], 2));
