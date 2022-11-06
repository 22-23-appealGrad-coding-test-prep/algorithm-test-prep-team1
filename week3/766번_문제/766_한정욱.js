/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
    let n = matrix.length;//row
    let m = matrix[0].length;//column 
    for(let i =0; i< n-1; i++){
        for(let j =0; j < matrix[i].length; j++){
            if(
                matrix[i+1] !== undefined &&
                matrix[i+1][j+1] !== undefined &&
                matrix[i][j] !==  matrix[i+1][j+1]){
                return false;
            }
        }
    }
    return true;
};