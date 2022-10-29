/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    let a = edges[0][0];
    let b = edges[1][0];
    let c = edges[1][1];
    
    if(a == b || a == c){
        return a;
    }
    return b;
};