/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const arr = [...s];
    arr.reverse();
    let i =0;
    if(arr[0] === " "){
    for(i = 0; i< arr.length; i++){
            if(arr[i] !== " "){
                break;
            }
    }}
    let count =0; 
    console.log(arr);
    for(let j = i; j<arr.length;j++){
        if(arr[j] === " "){
            break
        }
        count++;
    }
        return count;
};