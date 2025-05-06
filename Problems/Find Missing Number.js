/* Find Missing Number 

    - array containing n distinct numbers taken from 0 to n
    - return missing number

*/

function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

// Test

console.log(findMissingNumber([1, 2, 5, 7, 6, 0, 3]));
