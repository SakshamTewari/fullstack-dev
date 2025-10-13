/*
Given an array arr[] of non-negative integers and a value sum, the task is to check if there is a subset of the given array whose sum is equal to the given sum. 
[Subset doesnt need to be contiguous.]

Examples: 

Input: arr[] = [3, 34, 4, 12, 5, 2], sum = 9
Output: True
Explanation: There is a subset (4, 5) with sum 9.

Input: arr[] = [3, 34, 4, 12, 5, 2], sum = 30
Output: False
Explanation: There is no subset that add up to 30.
*/

function isSubsetSumRecursion(arr, sum, n = arr.length) {
  // base cases
  if (sum === 0) return true;
  if (n === 0) return false;

  // if current element greater than sum, ignore it
  if (arr[n - 1] > sum) {
    return isSubsetSumRecursion(arr, sum, n - 1);
  }

  // else, check if sum can be obtained by including/excluding current element
  return (
    isSubsetSumRecursion(arr, sum - arr[n - 1], n - 1) ||
    isSubsetSumRecursion(arr, sum, n - 1)
  );
}

// Test

console.log(isSubsetSumRecursion([3, 34, 4, 12, 5, 2], 9));
