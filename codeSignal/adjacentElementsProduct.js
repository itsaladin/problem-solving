function solution(inputArray) {
    let mult = [];
    for(let i=0; i < inputArray.length-1; i++){
        mult.push(inputArray[i] * inputArray[i+1])
    }
    return Math.max.apply(null, mult);
}
solution([3,6,-2,-5,7,3])