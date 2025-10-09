/*
Given an array arr[] and a number k . The array is sorted in a way that every element is at max k distance away from it sorted position. 
It means if we completely sort the array, then the index of the element can go from i - k to i + k where i is index in the given array. 
Our task is to completely sort the array.

Examples: 

Input: arr= [6, 5, 3, 2, 8, 10, 9], k = 3 
Output: [2, 3, 5, 6, 8, 9, 10]

Input: arr[]= [1, 4, 5, 2, 3, 6, 7, 8, 9, 10], k = 2
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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

function sortNearlySorted(arr, k) {
  let heap = new MinHeap();
  let result = [];

  // push first k+1 elements in heap
  for (let i = 0; i < Math.min(k + 1, arr.length); i++) {
    heap.push(arr[i]);
  }

  // for rest of the array
  for (let i = k + 1; i < arr.length; i++) {
    result.push(heap.pop());
    heap.push(arr[i]);
  }

  // empty the heap
  while (heap.heap.length > 0) {
    result.push(heap.pop());
  }
  return result;
}

// Test
console.log(sortNearlySorted([6, 5, 3, 2, 8, 10, 9], 3));
