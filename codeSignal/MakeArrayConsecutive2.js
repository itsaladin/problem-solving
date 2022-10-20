function solution(statues) {
    let count = 0;
    statues.sort((a, b) => {
        return a - b;
    })
    for(let i = 0; i < statues.length; i++) {
        if(statues[i + 1] - statues[i] > 1) {
            count += statues[i + 1] - statues[i] - 1;
        }
    }
    return count;
}