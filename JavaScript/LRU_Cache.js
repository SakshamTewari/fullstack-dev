/*
 LEAST RECENTLY USED
   - Evict elements from cache
   - Removes least recently used elements first before adding new ones
   - Cache speeds up things by storing in memory

   - Queue: doubly linked list
   - HashMap: item/page number as key, address of queue node as value

   get(key): return cache value for given page number
   put(key, val): add new value in cache
   use(key): uses existing value and re-arranges cache by marking used one as recent one
   evict(): removes value from cache
   insert(key, vak): add value in cache while performing put
*/

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

const LRUCache = function (cap) {
  this.cap = cap;
  this.count = 0;
  this.head = null;
  this.tail = null;
  this.cache = new Map();

  // Return value of given key
  this.get = function (key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const node = this.cache.get(key);
    this.use(key);
  };

  // Add new item in list
  this.put = function (key, val) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.val = val;
      this.use(key);
      this.cache.set(key, node);
    } else {
      if (this.count >= this.cap) {
        this.evict();
      }

      this.insert(key, val);
      this.use(key);
    }
  };

  // Uses the cache with given key and marks it as recently used
  this.use = function (key) {
    const node = this.cache.get(key);
    if (node === this.head) {
      return;
    } else if (node === this.tail) {
      node.prev.next = null;
      this.tail = node.prev;
      node.prev = null;
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      }

      node.next = this.head;
      node.prev = null;
      this.head.prev = node;
      this.head = node;
    }
  };

  // Removes the least recently used cache
  this.evict = function () {
    const keyToEvict = this.tail ? this.tail.key : null;
    if (!this.tail) {
      return;
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    }

    if (keyToEvict) {
      this.count--;
      this.cache.delete(keyToEvict);
    }
  };

  // Helper function to add new cache in queue
  this.insert = function (key, val) {
    const node = new Node(key, val);
    this.count++;
    this.cache.set(key, node);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  };

  // Display list
  this.display = function () {
    let current = this.head;
    while (current) {
      console.log(current.key, current.val);
      current = current.next;
    }
  };
};

// Test
const lru = new LRUCache(4);
lru.put(1, 'a');
lru.put(2, 'b');
lru.put(3, 'c');
lru.put(4, 'd');
lru.display();
lru.use(2);
lru.display();
