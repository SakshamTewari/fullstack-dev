/*
Given an array of points where each point is represented as points[i] = [xi, yi] on the X-Y plane and an integer k. 
The task is to find k closest points to the origin(0,0) in any order.
Note: The distance between two points on a plane is the Euclidean distance.

Examples: 

Input: k = 3, points = [[1, 3], [-2, 2], [5, -1], [3, 2], [1, 1]]
Output: [[1, 1], [-2, 2], [1, 3]]
Explanation: The Euclidean distances from the origin are:
Point (1, 3) = sqrt(10)
Point (-2, 2) = sqrt(8)
Point (5, -1) = sqrt(26)
Point (3, 2) = sqrt(13)
Point (1, 1) = sqrt(2)

The three closest points to the origin are [1, 1], [-2, 2] and [1, 3].
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

function KClosest(points, k) {
  let heap = new MaxHeap();

  for (let [x, y] of points) {
    let dist = x * x + y * y;
    heap.push([dist, [x, y]]);
    if (heap.size() > k) {
      heap.pop();
    }
  }
  return heap.heap.map((item) => item[1]);
}

// Test
console.log(
  KClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2,
  ),
);
