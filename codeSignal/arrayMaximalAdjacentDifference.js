function solution(inputArray) {
    let maxDif = 0
    for(i=1; i < inputArray.length; i++){
       let dif = Math.abs(inputArray[i] - inputArray[i-1]);
       if(dif > maxDif){
           maxDif = dif
       }
    }
    return maxDif
}
