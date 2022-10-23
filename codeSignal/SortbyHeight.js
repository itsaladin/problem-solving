function solution(a) {
    let arrFiltered = a.filter(x => {
      if(x !== -1 ){
          return x
      }
  }).sort((a,b) => a-b);
  for(let i = 0; i < a.length; i++) {
      if(a[i] != -1) {
          a[i] = arrFiltered.shift();
      }
  }
  return a
}
