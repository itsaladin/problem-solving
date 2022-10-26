var countOdds = function(L, R) {
    let N = Math.floor((R - L) / 2);
    if (R % 2 != 0 || L % 2 != 0)
      N += 1;
 
    return N;
};
console.log(countOdds(8, 10));