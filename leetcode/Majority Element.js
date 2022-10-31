/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const length = nums.length
    nums.sort((a,b) => a - b);
    
    if(length % 2 ===0){ return nums[length / 2]}
    else{ return nums[(length - 1) / 2]}
    
};