/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    //The first non-repeating character and its index
    let n = s.length;
    let index;
    //너무 안풀려서 매소드 찾아서 풀었음.
    for(let i =0; i<n;i++){
        //indexOf( ) 해당  값이 배열에 있으면 배열 인덱스줌  처음에 찾은거
        //lastIndexOf()  해당 값이 배열에 있으면 배열 인덱스줌 마지막에 나온거 
        //ex) 'aabb' ->  indexOf('b') = 2 , lastIndexOf('b') = 3 

        //따라서  처음찾은 인덱스가 마지막 찾은거랑 똑같으면  그게 non-repeating
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i]))
        {
            index = i; 
            break;  
        }
    }
    //아니면 -1
   return( index === undefined ?   -1: index);
};

