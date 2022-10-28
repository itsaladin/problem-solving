/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let i = 0
    let count = 0
    while(i < sentences.length){
        let sentenceWordLength = sentences[i].split(' ').length
        if(count < sentenceWordLength) count = sentenceWordLength
        
        i++
    }
    return count
};