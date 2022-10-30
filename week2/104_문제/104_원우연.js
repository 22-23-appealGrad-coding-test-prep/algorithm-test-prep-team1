/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    
    let i = 0;
    let depth = 1;
    return findDepth(root, depth);
};
  function findDepth(root, depth){
        if(root === null){
            return 0;
        }
        if(root.left === null && root.right === null){
            return depth;
        }
        if(root.right && root.left){ //js에서는 &&연산자가 false와 True가 존재할 시에 true에 있는 값을 읽어올수 있게 판단 가능
           return Math.max(findDepth(root.right, depth+1), findDepth(root.left, depth+ 1));
        }else if(root.right != null){
           return findDepth(root.right, depth+1);
        }else{ //root.left != null일 때
           return findDepth(root.left, depth+1);
        }
    };