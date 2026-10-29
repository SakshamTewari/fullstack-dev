// Leetcode-904

function fruitsIntoBaskets(fruits) {
  let i = 0;
  let freq = {};
  let distinct = 0;
  let max = -1;

  for (let j = 0; j < fruits.length; j++) {
    let type = fruits[j];

    if (!freq[type]) {
      distinct++;
      freq[type] = 0;
    }

    freq[type]++;

    while (distinct > 2) {
      //   let currMax = j - i + 1;
      //   max = Math.max(max, currMax);       we cannot calculate max when k>2 as window is invalid then

      freq[fruits[i]]--;
      if (freq[fruits[i]] === 0) distinct--;
      i++;
    }
    max = Math.max(max, j - i + 1);
  }
  return max;
}

// Test
console.log(fruitsIntoBaskets([1, 2, 3, 2, 2]));
