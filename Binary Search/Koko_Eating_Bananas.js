/*
A monkey Koko is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes the time (in hours) for all the bananas to be eaten.
Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.

Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.

Input: N = 4, a[] = {7, 15, 6, 3}, h = 8
Output: 5
Explanation:  If Koko eats 5 bananas/hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly. So, he will take 8 hours to complete all the piles.  
*/

function minEatingSpeed(piles, h) {
  let low = 1,
    high = Math.max(...piles);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      high = mid - 1; // answer found but try to find smaller one
    } else {
      low = mid + 1;
    }
  }
  return low;
}

// Test
console.log(minEatingSpeed([3, 6, 7, 11], 8));
