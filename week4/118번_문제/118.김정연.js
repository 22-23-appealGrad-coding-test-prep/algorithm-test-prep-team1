/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let final = []; // 배열 생성
    for(let i=0; i<numRows; i++){ //i=0부터 numRows 까지 i는 1씩 증가
        final[i] = []; //final[0] = 0;
        final[i][0] = final[i][i] = 1; //final[i][0] = final[0][0] = 1;
        for(let j=1; j<i; j++){ // j=1 부터 i까지 j는 1씩 증가
            final[i][j] = final[i-1][j] + final[i-1][j-1]; // final[1][2] = final[0][2] + final[0][1] 
        }   
    }
    return final;
};