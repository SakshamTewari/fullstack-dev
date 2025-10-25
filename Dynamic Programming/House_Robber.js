/*
There are n houses built in a line, each of which contains some money in it. 
A robber wants to steal money from these houses, but he can’t steal from two adjacent houses. The task is to find the maximum amount of money which can be stolen.

Examples: 

Input: hval[] = {6, 7, 1, 3, 8, 2, 4}
Output: 19
Explanation: The thief will steal from house 1, 3, 5 and 7, total money = 6 + 1 + 8 + 4 = 19.

Input: hval[] = {5, 3, 4, 11, 2}
Output: 16
Explanation: Thief will steal from house 1 and 4, total money = 5 + 11 = 16.
*/

function houseRobber(houses, i = 0, memo = {}) {
  if (i >= houses.length) return 0;

  if (i in memo) return memo[i];

  // rob or skip current house
  const rob = houses[i] + houseRobber(houses, i + 2, memo);
  const skip = houseRobber(houses, i + 1, memo);

  memo[i] = Math.max(rob, skip);
  return memo[i];
}

// Test
console.log(houseRobber([6, 7, 1, 3, 8, 2, 4]));
