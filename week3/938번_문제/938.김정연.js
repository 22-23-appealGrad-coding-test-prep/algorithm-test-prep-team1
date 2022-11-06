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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

 //기한 초과 제출
 var rangeSumBST = function(root, low, high) {
    let result = 0;
    if (root == null) return 0;
    if(root.val >= low && root.val <= high) result = root.val;
    return result + rangeSumBST(root.left,low,high) +  rangeSumBST(root.right,low,high);
};