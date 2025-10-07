/*
Given an array arr[] and a positive integer k, the task is to find the k most frequently occurring elements from a given array.
Note: If more than one element has same frequency then prioritise the larger element over the smaller one.

Examples: 

Input: arr= [3, 1, 4, 4, 5, 2, 6, 1], k = 2
Output: [4, 1]
Explanation: Frequency of 4 is 2 and frequency of 1 is 2, these two have the maximum frequency and 4 is larger than 1.

Input: arr = [7, 10, 11, 5, 2, 5, 5, 7, 11, 8, 9], k = 4
Output: [5, 11, 7, 10]
Explanation: Frequency of 5 is 3, frequency of 11 is 2, frequency of 7 is 2, frequency of 10 is 1. These four have the maximum frequency and 5 is largest among rest.
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
    while (i > 0 && this.heap[this.getParent(i)][0] > this.heap[i][0]) {
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
    let smallest = i,
      left = this.getLeft(i),
      right = this.getRight(i);

    if (
      left < this.heap.length &&
      this.heap[left][0] < this.heap[smallest][0]
    ) {
      smallest = left;
    }
    if (
      right < this.heap.length &&
      this.heap[right][0] < this.heap[smallest][0]
    ) {
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

function KFrequentElements(arr, k) {
  let freqMap = new Map();
  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  let heap = new MinHeap();
  for (let [num, freq] of freqMap.entries()) {
    heap.push([freq, num]);
    if (heap.size() > k) {
      heap.pop();
    }
  }

  // extract only numbers
  return heap.heap.map((x) => x[1]);
}

// Test
console.log(KFrequentElements([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
