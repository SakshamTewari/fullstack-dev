// Leetcode-977

function squareOfSortedArray1(nums) {
  let result = [];
  let pos = nums.length - 1;
  let i = 0,
    j = nums.length - 1;

  while (i <= j) {
    let leftSq = nums[i] ** 2;
    let rightSq = nums[j] ** 2;

    if (leftSq > rightSq) {
      result[pos--] = leftSq;
      i++;
    } else {
      result[pos--] = rightSq;
      j--;
    }
  }
  return result;
}

function squareOfSortedArray2(nums) {
  let pos = [];
  let neg = [];
  let res = [],
    ind = 0;
  let i = 0,
    a = 0,
    b = 0;

  while (i < nums.length) {
    if (nums[i] < 0) neg[b++] = nums[i++] ** 2;
    else pos[a++] = nums[i++] ** 2;
  }

  if (neg.length == 0) {
    return pos;
  }

  ((a = 0), (b = 0));
  reverse(neg);

  while (a < pos.length && b < neg.length) {
    if (pos[a] <= neg[b]) {
      res[ind++] = pos[a++];
    } else {
      res[ind++] = neg[b++];
    }
  }

  while (a < pos.length) {
    res[ind++] = pos[a++];
  }

  while (b < neg.length) {
    res[ind++] = neg[b++];
  }

  return res;
}

function reverse(nums) {
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
    i++;
    j--;
  }
  return nums;
}

// Test
nums = [-4, -1, 0, 3, 10];
// console.log(squareOfSortedArray1(nums));
console.log(squareOfSortedArray2(nums));
