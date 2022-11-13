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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  //1. 트리를 중위순위 하는 문제
  //2. 왼쪽 서브트리 방문 -> 노드 방문 -> 우측 서브트리를 순회하는 식이다.
  //3. tree이므로 재귀함수 이용
  const stack = []; //스택 이용
  const res = []; //

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
};
