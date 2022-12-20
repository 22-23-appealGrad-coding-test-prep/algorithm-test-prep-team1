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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null){
        return [];
    }
    let stack = [];
    let queue = [root];
    let zigzag = true;

    while(queue.length){
     let row = [];
     let queue_len = queue.length;
    
    zigzag = !zigzag;
     for(let i = 0; i < queue_len; i++){
         let node = queue.pop();
         if(zigzag){
             row.unshift(node.val);
         }else {
             row.push(node.val);
         }
     }
     stack(row);
    }
    return stack;
};