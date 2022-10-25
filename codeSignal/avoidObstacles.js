function solution(inputArray) {
    let maxNum = Math.max(...inputArray)
    for(i=1; i < maxNum; i++){
        var divs = inputArray.some(x=>x%i==0)
        if(!divs) return i;
    }
    return maxNum + 1
}
