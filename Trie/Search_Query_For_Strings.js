/*
you are given an array of strings (consisting of lowercase characters) arr[] of size N. 
Also, you will be given some queries Q and for each query a string is given and your task is to check if the given string is in the string array or not.

Note: Each word in the array of string can be of size 103.

Example 1:

Input:
N = 8, Q = 3
words[] = {the,a,there,answer,any,by,bye
their}
Queries[] = {the,an,any}
Output:
1
0
1
Explanation: After inserting words in the
array,all the words will be stored. Now
searching for the will result in 1
(present), an will resultin 0(not present)
and any will result in 1 (present).


Your Task:
Complete insert and search, return true if the given string is present in the TRIE, else false in search function.  
1 is printed by the driver's code if the value returned is true, 0 otherwise.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).
N = length of the string

Constraints:
1 <= N <= 103
1 <= Q <= 103
*/
class TrieNode {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Solution {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isWordEnd = true;
  }

  search(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        return false;
      }
      curr = curr.children[char];
    }
    return curr.isWordEnd;
  }
}

// Test
const words = ['the', 'a', 'there', 'answer', 'any', 'by', 'bye', 'their'];
const queries = ['the', 'an', 'any'];

const sol = new Solution();

for (let word of words) {
  sol.insert(word);
}

for (let q of queries) {
  console.log(sol.search(q) ? 1 : 0);
}
