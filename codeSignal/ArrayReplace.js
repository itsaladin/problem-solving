function solution(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((item, i) => item === elemToReplace ? substitutionElem : item);

}