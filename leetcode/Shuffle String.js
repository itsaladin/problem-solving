/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let strArr = []
    for(i=0; i<s.length; i++){
        strArr[indices[i]] = s[i]
    }
    return strArr.join('')
};