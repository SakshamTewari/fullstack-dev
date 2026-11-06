/* Autocomplete System

    - helps with word suggestions based on a given prefix
    - methods
        insert(string) 
        search(string) : string[] returns all words that start with given prefix


*/

class AutocompleteSystem {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node.isEnd = true; // end of word
  }

  search(prefix) {
    let node = this.root;

    // navigate to the node that ends the prefix
    for (let char of prefix) {
      if (!node[char]) return []; // prefix not found
      node = node[char];
    }

    // DFS tofind all words from this node
    const results = [];

    const dfs = (currNode, path) => {
      if (currNode.isEnd) {
        results.push(path);
      }
    };
  }
}
