// Leetcode-39

function combinationSum(arr, target, i = 0, sum = 0, curr = [], res = []) {
  // Found sum
  if (sum === target) {
    res.push([...curr]);
    return res;
  }

  // No more combination possible
  if (i >= arr.length || sum > target) {
    return res;
  }

  curr.push(arr[i]);

  // select
  combinationSum(arr, target, i, sum + arr[i], curr, res);
  curr.pop();

  // skip
  combinationSum(arr, target, i + 1, sum, curr, res);

  return res;
}

// Test

console.log(combinationSum([1, 2, 3], 6));
