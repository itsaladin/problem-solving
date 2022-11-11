/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    for(i=0; i<nums.length; i++){
        nums[i] = nums[i]*nums[i]
    }
    let sortNums =  nums.sort((a, b) => {return a - b})
    return sortNums
};