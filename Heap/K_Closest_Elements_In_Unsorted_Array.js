/*
Given an unsorted array arr[] and two numbers X and K, the task is to find K closest values to X in arr[].

Examples: 

Input: arr[] = {10, 2, 14, 4, 7, 6}, X = 5, K = 3 
Output: 4 6 7
Explanation: Three closest values of x are 4, 6 and 7.

Input: arr[] = {-10, -50, 20, 17, 80}, X = 20, K = 2
Output: 17 20
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
    while (i > 0 && this.heap[this.getParent(i)][0] < this.heap[i][0]) {
      // note: we are passing pair
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
    if (left < this.heap.length && this.heap[left][0] > this.heap[largest][0]) {
      largest = left;
    }
    if (
      right < this.heap.length &&
      this.heap[right][0] > this.heap[largest][0]
    ) {
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

function KClosestElements(arr, k, x) {
  let heap = new MaxHeap();
  for (let num of arr) {
    heap.push([Math.abs(num - x), num]); // store distance from x, number

    if (heap.size() > k) {
      heap.pop(); // remove farthest element
    }
  }
  return heap.heap.map((item) => item[1]);
}

// Test
console.log(KClosestElements([1, 2, 3, 4, 5], 4, 3));
