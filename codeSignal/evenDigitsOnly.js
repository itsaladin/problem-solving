function solution(n) {
    let num = `${n}`
    for(i=0; i < num.length; i++){
        if(num[i]%2 !=0){
            return false
        }
    }
    return true
}
