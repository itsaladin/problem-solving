function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    if(Math.max(yourLeft, yourRight) == Math.max(friendsLeft,friendsRight) && Math.min(yourLeft, yourRight) == Math.min(friendsLeft, friendsRight) ){
        return true
    }else{
        return false
    }
}
