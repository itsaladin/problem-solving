/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let strArr = ""
    let i = 0
    while(i < command.length){
        if(command[i] == '(' && command[i + 1] == ')'){
            strArr += 'o'
            i++
        }
        else if(command[i] == '(' && command[i+1] == 'a' && command[i+2] == 'l'){
            strArr += 'al'
            i+=3
        }
        else{
            strArr += command[i]
        }
        
        i++
    }
    return strArr
};