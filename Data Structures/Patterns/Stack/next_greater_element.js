// Leetcode-496

function nextGreaterElement1(nums1, nums2) {
  let stack = [];
  let map = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    let num = nums2[i];

    while (stack.length > 0 && stack[stack.length - 1] <= num) {
      stack.pop();
    }

    map.set(num, stack.length === 0 ? -1 : stack[stack.length - 1]);
    stack.push(num);
  }

  return nums1.map((num) => map.get(num));
}

// Test

console.log(nextGreaterElement1([4, 1, 2], [1, 3, 4, 2]));

// Leetcode-503

function nextGreaterElement2(nums) {}
