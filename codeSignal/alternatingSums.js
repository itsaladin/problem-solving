function solution(a) {
    let teamA = 0
    let teamB = 0
    let resultArr = []
    for(i = 0; i < a.length; i++){
        if(i % 2 == 0){
            teamA += a[i]
        }else{ 
            teamB += a[i]
        }
    }
    resultArr.push(teamA, teamB)
    return resultArr
}
