/*
 A line of N kids is standing there. The rating values listed in the integer array ratings are assigned to each kid. These kids are receiving candy according to the following criteria:

There must be at least one candy for every child.
Kids whose scores are higher than their neighbours receive more candies than their neighbours.
Return the minimum number of candies needed to distribute among children.

Input: ratings = [1, 0, 5]  
Output: 5  
Explanation: The distribution of candies will be 2, 1, 2 to the first, second, and third child respectively.
*/

function candy(ratings) {
  const candies = new Array(ratings.length).fill(1);

  // Left to right pass
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Right to left pass
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((sum, c) => sum + c, 0);
}

// Test
console.log(candy([1, 0, 5]));
