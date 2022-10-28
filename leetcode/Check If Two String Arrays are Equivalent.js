/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    let arr1 = []
    let arr2 = []
    for(i=0;i<word1.length;i++){
        arr1 += word1[i]
    }
    for(i=0;i<word2.length;i++){
        arr2 += word2[i]
    }
    if(arr1==arr2){
       return true
    }
    return false
};