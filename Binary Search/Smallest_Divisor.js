/*
 You are given an array of integers 'arr' and an integer i.e. a threshold value 'limit'. 
 Your task is to find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it, the sum of the division's result is less than or equal to the given threshold value.

Input Format: N = 5, arr[] = {1,2,3,4,5}, limit = 8
Result: 3
Explanation: We can get a sum of 15(1 + 2 + 3 + 4 + 5) if we choose 1 as a divisor. 
The sum is 9(1 + 1 + 2 + 2 + 3)  if we choose 2 as a divisor. Upon dividing all the elements of the array by 3, we get 1,1,1,2,2 respectively. Now, their sum is equal to 7 <= 8 i.e. the threshold value. So, 3 is the minimum possible answer.
 */

function smallestDivisor(arr, limit) {
  let low = 1,
    high = Math.max(...arr);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let sum = 0;
    for (let num of arr) {
      sum += Math.ceil(num / mid);
    }

    if (sum <= limit) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

// Test
console.log(smallestDivisor([1, 2, 3, 4, 5], 8));
