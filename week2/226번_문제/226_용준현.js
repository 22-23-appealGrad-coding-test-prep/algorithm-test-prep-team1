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
 * @return {TreeNode}
 */
 var invertTree = function (root) {
  // 이진 트리 root를 invert한 결과를 반환하기
  // 입력 조건 : 트리의 노드들로 이루어진 배열
  // 입력 조건 : invert한 root 반환

  // 엣지 케이스 1 : 루트가 null이거나 비어있으면 root 반환
  if (root === null) return root;

  // 루트 노드의 왼쪽 자식과 오른쪽 자식 스왑
  [root.left, root.right] = [root.right, root.left]

  // 왼쪽 자식트리에 재귀적으로 실행
  invertTree(root.left);
  // 오른쪽 자식트리에 재귀적으로 실행
  invertTree(root.right);

  // invert된 root 반환
  return root;


};