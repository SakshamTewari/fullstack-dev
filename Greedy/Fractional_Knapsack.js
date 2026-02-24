/*
The weight of N items and their corresponding values are given. We have to put these items in a knapsack of weight W such that the total value obtained is maximized.
Note: We can either take the item as a whole or break it into smaller units.

Input:
 val = [60, 100, 120], wt = [10, 20, 30], capacity = 50  
Output:
 240.000000  
*/

function fractionalKnapsack(W, weights, values) {
  let items = [];

  for (let i = 0; i < weights.length; i++) {
    items.push({
      weight: weights[i],
      value: values[i],
      ratio: values[i] / weights[i],
    });
  }

  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;

  for (let item of items) {
    if (W >= item.weight) {
      // take whole item
      totalValue += item.value;
      W -= item.weight;
    } else {
      // take fraction
      totalValue += item.ratio * W;
      break; // knapsack is full now
    }
  }
  return totalValue;
}

// Test
console.log(fractionalKnapsack(50, [10, 20, 30], [60, 100, 120]));
