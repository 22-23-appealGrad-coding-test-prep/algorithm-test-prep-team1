/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 
/*
 * @param {TreeNode} root
 * @return {boolean}
 */



var isSymmetric = function(root) {
    if(root.length <= 1) return true;
    let arrL = [];
    let arrR = [];
    let i =0;
    Left(arrL,root.left);
    Right(arrR,root.right);
    //왼쪽 컨테이너
    console.log(arrL);
   	//오른쪽 컨테이너 
    console.log(arrR);
	    
    //만약에 오른쪽배열이 왼쪽배열이랑 길이가 다르면 false
    if(arrR.length !== arrL.length){
            return false;
    }else{
    	//길이는 둘다 똑같다는 거니까, 해당 길이 만큼 반복하면서 요소 하나씩 비교.
        while(i < arrR.length){
            if( arrR[i] !== arrL[i]){
            //값이 틀린게 있으면 false
                return false;
            }
            i++;
        }
    }
    //값이 다 똑같으면 true
    return true;
};
//왼쪽 상위노드 start 
//노드가 null값 나올때까지 검색후, 하나씩 컨테이너 배열에 추가
//null 값 까지 넣어줘야, 순서가 맞는지 확인 가능 
    const Left = (arr, node) => {
        
        if (node === null){
            arr.push(null);
            return;}
        //왼쪽 먼저 검색
        Left(arr,node.left);
        //오른쪽 검색
        Left(arr,node.right);
        //해당 노드값 배열에 추가
        arr.push(node.val);    
    };

//오른쪽 상위노드 start
//symmetric 이 맞을려면 왼쪽노드의 반대 순서로 검색
    const Right = (arr,node) => {

         if (node === null){
             arr.push(null);
             return;
         }
        //오른쪽 먼저 검색
        Right(arr,node.right);
        //왼쪽 검색
        Right(arr,node.left);
        //해당 노드값 배열에 추가
        arr.push(node.val);  
};