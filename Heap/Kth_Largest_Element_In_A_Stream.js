/*
You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. 
This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. 
More specifically, we are looking for the kth highest score in the sorted list of all scores.

Implement the KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.

Input:
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

Output: [null, 4, 5, 5, 8, 8]

*/

/*
Heap needs structure + order. But .shift():Just deletes heap[0]

*/
class KthLargest {
  constructor(k, nums) {
    this.minHeap = [];
    this.k = k;

    for (let num of nums) {
      this.add(num);
    }
  }

  add(val) {
    this._insert(val);

    if (this.minHeap.length > this.k) {
      this._removeMin();
    }
    return this.minHeap[0];
  }

  _insert(val) {
    this.minHeap.push(val);
    let i = this.minHeap.length - 1;
    // percolate up
    while (i > 0 && this.minHeap[i] < this.minHeap[Math.floor((i - 1) / 2)]) {
      // swap with parent
      this._swap(i, Math.floor((i - 1) / 2));
      i = Math.floor((i - 1) / 2);
    }
  }

  _removeMin() {
    if (this.minHeap.length === 0) return null;
    if (this.minHeap.length === 1) return this.minHeap.pop();

    let min = this.minHeap[0];
    this.minHeap[0] = this.minHeap.pop();

    let i = 0;
    // percolate down
    while (2 * i < this.minHeap.length) {
      if (
        this.minHeap[2 * i + 1] < this.minHeap[2 * i] &&
        this.minHeap[i] > this.minHeap[2 * i + 1]
      ) {
        // swap with right child
        this._swap(i, 2 * i + 1);
        i = 2 * i + 1;
      } else if (this.minHeap[i] > this.minHeap[2 * i]) {
        // swap with left child
        this._swap(i, 2 * i);
        i = 2 * i;
      } else {
        break;
      }
    }
  }

  _swap(i, j) {
    let temp = this.minHeap[i];
    this.minHeap[i] = this.minHeap[j];
    this.minHeap[j] = temp;
  }
}

// Test
const case1 = new KthLargest(3, [4, 5, 8, 2]);
console.log(case1.add(3));
console.log(case1.add(5));
console.log(case1.add(10));
console.log(case1.add(9));
console.log(case1.add(4));
