/*
Given an array A[] of N positive integers and two positive integers K1 and K2. 
Find the sum of all elements between K1th and K2th smallest elements of the array. 
It may be assumed that (1 <= k1 < k2 <= n).


Example 1:

Input:
N  = 7
A[] = {20, 8, 22, 4, 12, 10, 14}
K1 = 3, K2 = 6
Output:
26
Explanation:
3rd smallest element is 10
6th smallest element is 20
Element between 10 and 20 
12,14. Their sum = 26.
*/

class MaxHeap {
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
    while (i > 0 && this.heap[this.getParent(i)] < this.heap[i]) {
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
    let largest = i,
      left = this.getLeft(i),
      right = this.getRight(i);
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest);
    }
  }
  top() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

function sumBetweenTwoKth(arr, k1, k2) {
  let heap = new MaxHeap();

  // get k2 smallest elements
  for (let num of arr) {
    heap.push(num);
    if (heap.heap.length > k2) {
      heap.pop();
    }
  }

  // remove elements until size = k1
  while (heap.heap.length > k1) {
    heap.pop();
  }

  return heap.heap.reduce((acc, val) => acc + val, 0);
}

// Test
console.log(sumBetweenTwoKth([20, 8, 22, 4, 12, 10, 14], 3, 6));
