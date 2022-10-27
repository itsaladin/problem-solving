/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let i=0
    let count = 0
    while(i < operations.length){
        if(operations[i]== '--X' || operations[i]== 'X--'){
            count--
        }
        if(operations[i]== '++X' || operations[i]== 'X++'){
            count++
        }
        i++
    }
    return count
};