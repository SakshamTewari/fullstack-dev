/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]
*/

function groupAnagrams(strs) {
  const map = new Map();

  for (let word of strs) {
    const key = word.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }

  return Array.from(map.values());
}

// Test
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
