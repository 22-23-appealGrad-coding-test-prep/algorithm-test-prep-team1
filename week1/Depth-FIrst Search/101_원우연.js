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
 * @return {boolean}
 */


 var isSymmetric = function(root) {
    //1.bfs 트리 문제로 문제에서 주어지는 트리가 이진 트리 형태면 true, 아니면 false를 반환하는 문제다.
    //2. 반복문을 통해 후위 순위를 진행하여 모든 노드를 탐색해야한다.
    if(root===null) return true;
    return isSym(root.left, root.right)
};

function isSym(left, right) {
    if(left === null || right === null) return left === right
    if(left.val !== right.val) return false
    return isSym(left.left, right.right) && isSym(right.left, left.right)
}