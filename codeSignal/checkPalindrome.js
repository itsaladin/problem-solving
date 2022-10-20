function solution(inputString) {
    for(let i = 0;i <= inputString.length; i++){
       if( inputString[i] != inputString[inputString.length - i - 1])       {
           return false;
       }
    }
    return true;
}
solution('abac')
