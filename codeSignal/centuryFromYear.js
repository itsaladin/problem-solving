function solution(year) {
    if(year % 100 !==0){
        let mul = year / 100;
        return Math.floor(mul) + 1;
    }
    return year / 100;
}
solution(1905)
