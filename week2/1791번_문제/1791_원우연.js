/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    //1. 트리에서 모두와 연결되어있는 노드 값을 찾는 문제
    //2. 빈도 수가 가장 높게 나오는 값을 찾으면 될 것이다.
    //3. 이차원 배열 형태인 것에 유의하여 풀이
    const x = edges[0][0];
    const y = edges[0][1];
    
    if ( x == edges[1][0] || x == edges[1][1]) {
        return x;
    }
    else {
        return y;
    }


};