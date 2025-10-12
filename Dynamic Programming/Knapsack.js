/*
Given n items where each item has some weight and profit associated with it and also given a bag with capacity W, [i.e., the bag can hold at most W weight in it]. 
The task is to put the items into the bag such that the sum of profits associated with them is the maximum possible. 

Note: The constraint here is we can either put an item completely into the bag or cannot put it at all [It is not possible to put a part of an item into the bag].

Input:  W = 4, profit[] = [1, 2, 3], weight[] = [4, 5, 1]
Output: 3
Explanation: There are two items which have weight less than or equal to 4. If we select the item with weight 4, the possible profit is 1. 
And if we select the item with weight 1, the possible profit is 3. So the maximum possible profit is 3. 
Note that we cannot put both the items with weight 4 and 1 together as the capacity of the bag is 4.

Input: W = 3, profit[] = [1, 2, 3], weight[] = [4, 5, 6]
Output: 0
*/

function knapsackRecursion(weight, profit, W, n = weight.length) {
  // base case
  if (n === 0 || W === 0) return 0;

  let pick = 0;

  if (weight[n - 1] <= W) {
    // include
    pick =
      profit[n - 1] +
      knapsackRecursion(weight, profit, W - weight[n - 1], n - 1);
  }

  // not include
  let notPick = knapsackRecursion(weight, profit, W, n - 1);

  return Math.max(pick, notPick);
}

// Test

console.log(knapsackRecursion([4, 5, 6], [1, 2, 3], 3));
