/*
Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

MyHashMap() initializes the object with an empty map.
void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.

Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]
*/

// Chaining with arrays to handle collisions

var MyHashMap = function () {
  this.size = 1000;
  this.buckets = new Array(this.size).fill(null).map(() => []);
};

MyHashMap.prototype._hash = function (key) {
  return key % this.size;
};

MyHashMap.prototype.put = function (key, value) {
  const index = this._hash(key);
  const bucket = this.buckets[index];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket[i][1] = value; // if value exists, update it
      return;
    }
  }

  bucket.push([key, value]); // insert new pair
};

MyHashMap.prototype.get = function (key) {
  const index = this._hash(key);
  const bucket = this.buckets[index];

  for (let [k, v] of bucket) {
    if (k === key) return v; // return value if key found
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  const index = this._hash(key);
  const bucket = this.buckets[index];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
      return;
    }
  }
};

// Test
var obj = new MyHashMap();

obj.put(1, 100);
obj.put(2, 200);

console.log(obj.get(1));
console.log(obj.get(3));

obj.put(2, 250);
console.log(obj.get(2));

obj.remove(2);
console.log(obj.get(2));
