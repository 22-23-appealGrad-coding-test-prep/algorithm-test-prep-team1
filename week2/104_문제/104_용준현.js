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
 var maxDepth = function (root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 1;
  if (root.left == null && root.right != null) return maxDepth(root.right) + 1;
  else if (root.left != null && root.right == null) return maxDepth(root.left) + 1;
  else {
      let leftDepth = maxDepth(root.left) + 1
      let rightDepth = maxDepth(root.right) + 1;
      return Math.max(leftDepth, rightDepth)
  }

};