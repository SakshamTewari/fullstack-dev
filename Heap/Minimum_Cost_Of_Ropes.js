/*
Given an array, arr[] of rope lengths, connect all ropes into a single rope with the minimum total cost. 
The cost to connect two ropes is the sum of their lengths. 

Examples:

Input: arr[] = [4, 3, 2, 6]
Output: 29
Explanation: First connect 2 and 3 to get [4, 5, 6] with a cost of 5, then connect 4 and 5 to get [9, 6] with a cost of 9, and finally connect 9 and 6 to get one rope with a cost of 15, giving a total minimum cost of 29. 
Any other order, such as connecting 4 and 6 first, results in a higher total cost of 38.
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
    let smallest = i,
      left = this.getLeft(i),
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
  size() {
    return this.heap.length;
  }
  top() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

function minCostRopes(arr) {
  const heap = new MinHeap();
  for (let rope of arr) {
    heap.push(rope);
  }
  let totalCost = 0;

  while (heap.size() > 1) {
    let first = heap.pop();
    let second = heap.pop();
    let cost = first + second;
    totalCost += cost;
    heap.push(cost);
  }
  return totalCost;
}

// Test
console.log(minCostRopes([4, 3, 2, 6]));
