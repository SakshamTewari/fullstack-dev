/*
Given an array arr[] of N distinct elements and a number K, where K is smaller than the size of the array. 
Find the K'th smallest element in the given array.

Examples:

Input: arr[] = [7, 10, 4, 3, 20, 15], K = 3 
Output: 7

Input: arr[] = [7, 10, 4, 3, 20, 15], K = 4 
Output: 10 
*/

// Using priority queue (heap)

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
    let largest = i;
    let left = this.getLeft(i),
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
  size() {
    return this.heap.length;
  }
}

function kthSmallest(arr, k) {
  let heap = new MaxHeap();
  for (let num of arr) {
    heap.push(num);
    if (heap.size() > k) {
      heap.pop(); // keep only k smallest
    }
  }
  return heap.top();
}

// Not true heap, just a array hack kind of , Time: O(n * klogk)
// .sort() Okay for smaller inputs
function kthSmallestWithoutHeap(arr, k) {
  let heap = [];

  for (let num of arr) {
    heap.push(num);
    heap.sort((a, b) => b - a); // puts largest at index 0 (max heap)
    if (heap.length > k) heap.shift();
  }
  return heap[0];
}

// Test
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
