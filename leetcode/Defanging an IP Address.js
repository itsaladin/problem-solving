/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let result = []
    for(i=0;i<address.length;i++){
        result += address[i].replace('.','[.]')
    }
    return result
};