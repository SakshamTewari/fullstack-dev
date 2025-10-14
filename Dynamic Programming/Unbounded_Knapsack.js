/*
Given a knapsack weight, say capacity and a set of n items with certain value val and weight wt, The task is to fill the knapsack in such a way that we can get the maximum profit. 
This is different from the classical Knapsack problem, here we are allowed to use an unlimited number of instances of an item.

Examples: 

Input: capacity = 100, val[]  = [1, 30], wt[] = [1, 50]
Output: 100 
Explanation: There are many ways to fill knapsack. 
1) 2 instances of 50 unit weight item. 
2) 100 instances of 1 unit weight item. 
3) 1 instance of 50 unit weight item and 50 instances of 1 unit weight items. 
We get maximum value with option 2.  

Input: capacity = 8, val[] = [10, 40, 50, 70], wt[]  = [1, 3, 4, 5]        
Output : 110
Explanation: We get maximum value with one unit of weight 5 and one unit of weight 3.
*/

function unboundedKnapsackMemoization(
  weight,
  profit,
  W,
  n = weight.length,
  memo = Array.from({ length: n + 1 }, () => Array(W + 1).fill(-1)),
) {
  // base case
  if (n === 0 || W === 0) return 0;

  // Check if value is already computed
  if (memo[n][W] !== -1) return memo[n][W];

  let pick = 0;

  if (weight[n - 1] <= W) {
    // include
    pick =
      profit[n - 1] +
      unboundedKnapsackMemoization(weight, profit, W - weight[n - 1], n, memo); // n not decremented as we can include same item again
  }

  // not include
  let notPick = unboundedKnapsackMemoization(weight, profit, W, n - 1, memo);

  // store the result in memo and return it
  memo[n][W] = Math.max(pick, notPick);
  return memo[n][W];
}

// Using recursion
function unboundedKnapsackRecursion(weight, profit, W, n = weight.length) {
  // base case
  if (n === 0 || W === 0) return 0;

  let pick = 0;
  if (weight[n - 1] <= W) {
    // include
    pick =
      profit[n - 1] +
      unboundedKnapsackRecursion(weight, profit, W - weight[n - 1], n);
  }

  // not include
  let notPick = unboundedKnapsackRecursion(weight, profit, W, n - 1);

  return Math.max(pick, notPick);
}

// Test
console.log(unboundedKnapsackMemoization([1, 3, 4, 5], [10, 40, 50, 70], 8));
console.log(unboundedKnapsackRecursion([1, 3, 4, 5], [10, 40, 50, 70], 8));
