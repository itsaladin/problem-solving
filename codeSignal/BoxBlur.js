function solution(image) {
    let sum=0;
    let blurred=[],line=[];
    for (let x=0;x+3<=image.length;x++){
      for (let y=0;y+3<=image[0].length;y++){
        sum=0;
        for (let i=x; i<3+x; i++){
          for (let j=y; j<3+y; j++){
            sum+=image[i][j];
          }
        }
         line.push(Math.floor(sum/9));
      }
      blurred[x]=line; 
      line=[];
    }
    return blurred;
  }
  