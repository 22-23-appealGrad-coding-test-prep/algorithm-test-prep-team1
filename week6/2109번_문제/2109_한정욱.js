/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let arr = [...s];
    // for(let i=0;i<spaces.length;i++){
    //     for(let j = spaces.length-1;j>spaces[i];j--){
    //         let save = arr[spaces[j]];
    //         arr[spaces[j]] = " ";
    //     }
    // }
    for(let i=0;i<spaces.length;i++){
        //처음에 공백추가할떄
        if (spaces[i] === 0) {
            arr[spaces[i]] = " " + arr[spaces[i]];
        }
        //after the first index, 
        arr[spaces[i] - 1] = arr[spaces[i] - 1] + " ";
    }
    return(arr.join(""))
};