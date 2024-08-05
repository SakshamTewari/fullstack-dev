/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.

 
Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let n = nums.length;

    // Reduce search space of binary search by checking edge cases
    if(n == 1){
        return nums[0];
    }
    if(nums[0] != nums[1]){
        return nums[0];
    }
    if(nums[n-1] != nums[n-2]){
        return nums[n-1];
    }
    
    // Start binary search between 1..n-2
    // index pairing : (0,1) (2,3)...
    let low = 1 , high = n-2;

    while(low <= high){
        let mid = Math.floor(low + (high-low)/2);

        if(nums[mid] != nums[mid+1] && nums[mid] != nums[mid-1]){
            return nums[mid];
        }
        else if (mid % 2 == 1 && nums[mid] == nums[mid-1] || mid % 2 == 0 && nums[mid] == nums[mid+1]){
            low = mid+1;
        }
        else {
            high = mid - 1;
        }
    }
    return null;