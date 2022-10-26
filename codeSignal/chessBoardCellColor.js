function solution(cell1, cell2) {
    let cellsStrArr = ["A", "B", "C", "D", "E", "F", "G", "H"]
    cell1 = cell1.split('')
    cell2 = cell2.split('')
    return ((parseInt(cell1[1])+cellsStrArr.indexOf(cell1[0])+1)%2) == ((parseInt(cell2[1])+cellsStrArr.indexOf(cell2[0])+1)%2)
}