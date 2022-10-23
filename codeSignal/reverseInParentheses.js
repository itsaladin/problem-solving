function solution(inputString) {
    regex = /\(([^()]*)\)/i;
    
    if (inputString.includes('(')) {
        return solution(inputString.replace(regex, (_, $1) => $1.split('').reverse().join('')));                             
    } else {
        return inputString
    }
}
