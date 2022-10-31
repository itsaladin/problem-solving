/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let i = 0
    let count = 0
    let numArr = []
    while(i < nums.length){
        count+= nums[i]
        numArr.push(count)
        i++
    }
    return numArr
};