// Node
// Trie
// insert
// contains
// startsWithPrefix

class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      let charToInsert = word[i];
      // check if charToInsert is already a child of current node, i.e, it is already present
      // if not, create a node for that charToInsert
      if (!(charToInsert in curr.children)) {
        curr.children[charToInsert] = new Node();
      }

      curr = curr.children[charToInsert]; // move the curr pointer
    }
    curr.isWordEnd = true;
  }

  contains(word) {
    let curr = this.root;

    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];

      if (!(charToFind in curr.children)) {
        return false;
      }

      curr = curr.children[charToFind];
    }

    // we cannot just return true because last char that is pointing to null could be different
    return curr.isWordEnd;
  }

  startsWithPrefix(prefix) {
    let curr = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];

      if (!(charToFind in curr.children)) {
        return false;
      }

      curr = curr.children[charToFind];
    }

    // we can return true directly as we only want to look for presence of prefix.
    return true;
  }
}
