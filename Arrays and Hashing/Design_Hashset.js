/*
Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]
*/

var MyHashSet = function () {
  this.size = 1000;
  this.buckets = new Array(this.size).fill(null).map(() => []);
};

MyHashSet.prototype._hash = function (key) {
  return key % this.size;
};

MyHashSet.prototype.add = function (key) {
  const index = this._hash(key);
  const bucket = this.buckets[index];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === key) return;
  }
  bucket.push(key);
};

MyHashSet.prototype.remove = function (key) {
  const index = this._hash(key);
  const bucket = this.buckets[index];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] === key) {
      bucket.splice(i, 1);
      return;
    }
  }
};

MyHashSet.prototype.contains = function (key) {
  const index = this._hash(key);
  return this.buckets[index].includes(key);
};

// Test

let set = new MyHashSet();
set.add(1);
set.add(2);
console.log(set.contains(1));
console.log(set.contains(3));
set.add(2);
console.log(set.contains(2));
set.remove(2);
console.log(set.contains(2));
