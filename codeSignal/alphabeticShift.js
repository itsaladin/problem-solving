function solution(inputString) {
    let newStr = [], result;
    for(let i = 0; i < inputString.length; i++) {
        newStr.push(String.fromCharCode((inputString[i].charCodeAt() + 1)));
     }
      result = newStr.join("").replace(/{/g, 'a');
      return result
  }
  