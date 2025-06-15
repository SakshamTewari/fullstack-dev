/*
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. 
Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.
*/

class MaxHeap {
  constructor(nums) {
    this.heap = [];
    this.heap.push(0);
    for (let num of nums) {
      this._insert(num);
    }
  }

  _insert(val) {
    this.heap.push(val);
    // percolate up
    let i = this.heap.length - 1;
    while (i > 1 && this.heap[i] > this.heap[Math.floor(i / 2)]) {
      // swap with parent
      this._swap(i, Math.floor(i / 2));
      i = Math.floor(i / 2);
    }
  }

  _extractMax() {
    if (this._size() === 0) return null;
    if (this._size() === 1) return this.heap.pop();

    let max = this.heap[1];
    this.heap[1] = this.heap.pop();

    // percolate down
    let i = 1;
    while (2 * i < this.heap.length) {
      if (
        this.heap[2 * i + 1] > this.heap[2 * i] &&
        this.heap[i] < this.heap[2 * i + 1]
      ) {
        // swap with right child
        this._swap(i, 2 * i + 1);
        i = 2 * i + 1;
      } else if (this.heap[i] < this.heap[2 * i]) {
        // swap with left child
        this._swap(i, 2 * i);
        i = 2 * i;
      } else {
        break;
      }
    }
    return max;
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  _size() {
    return this.heap.length - 1;
  }
}

function LastStoneWeight(stones) {
  const heap = new MaxHeap(stones);
  while (heap._size() > 1) {
    const stone1 = heap._extractMax();
    const stone2 = heap._extractMax();
    if (stone1 !== stone2) {
      heap._insert(stone1 - stone2);
    }
  }
  return heap._size() ? heap._extractMax() : 0;
}

// Test

console.log(LastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(LastStoneWeight([4, 3, 4, 3, 2]));
console.log(LastStoneWeight([2, 6, 6, 9, 4, 3]));
