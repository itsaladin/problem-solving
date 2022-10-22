function solution(n) {
    let str = n.toString();
    let countOne = 0;
    let countTwo = 0;
    for(i=0; i < str.length/2; i++){
        countOne += Number(str[i]);
    }
    for(i=str.length; i > str.length/2; i--){
        countTwo += Number(str[i - 1]);
    }
    if(countOne == countTwo) return true
    return false
}
