/*
Given two arrays of strings list1 and list2, find the common strings with the least index sum.
A common string is a string that appeared in both list1 and list2.
A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.
Return all the common strings with the least index sum. Return the answer in any order.

 
Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".

Example 3:

Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".
*/
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let minIndexSum = Infinity;
  let minIndexSumWords = [];
  let map = new Map();

  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let j = 0; j < list2.length; j++) {
    let indexSum = j + map.get(list2[j]);
    if (indexSum < minIndexSum) {
      minIndexSum = indexSum;
      minIndexSumWords = [list2[j]]; // Clear the array and add the current restaurant
    } else if (indexSum === minIndexSum) {
      minIndexSumWords.push(list2[j]); // Add the restaurant if the index sum is equal
    }
  }
  return minIndexSumWords;
};
