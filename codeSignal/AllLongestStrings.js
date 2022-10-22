function solution(inputArray) {
    let max = 0;
    inputArray.map(item => max = Math.max(max, item.length));
    result = inputArray.filter(item => item.length == max);
    return result;
}
