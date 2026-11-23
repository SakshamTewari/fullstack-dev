// Leetcode-46

function permutations(nums, i = 0, j = 0, curr = [], result = []) {
  if (i === nums.length) {
    return result;
  }

  if (j === nums.length) {
    result.push(curr);
    return;
  }

  curr.push(nums[j]);
  permutations(nums, i, j + 1, curr, result);
  curr.pop();

  return result;
}

// Test

console.log(permutations([1, 2, 3]));
