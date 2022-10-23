/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val==undefined ? 0 : val)
 *     this.left = (left==undefined ? null : left)
 *     this.right = (right==undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function (root) {
  // 트리의 왼쪽 과 오른쪽이 대칭인지 판단하는 문제
  // 입력 조건 : 이진 트리 배열
  // 출력 조건 : 대칭이면 true, 대칭이 아니면 false

  // 출력 : 대칭을 확인하는 재귀함수를 호출
  return symTest(root.left, root.right)
};

// 트리 왼쪽과 오른쪽이 대칭인지 확인하는 재귀함수
// 매개변수 : 트리 왼쪽, 트리 오른쪽
const symTest =(treeLeft, treeRight) => {
  // 최대 깊이를 탐색 했을 때 조건
  if (treeLeft == null && treeRight == null) return true;
  if (treeLeft == null || treeRight == null) return false;

  // 1. 왼쪽 노드와 오른쪽 노드 값이 같은지 비교
  // 2. 매개변수로 받은 왼쪽 자식 트리의 왼쪽과 오른쪽 자식 트리의 오른쪽 비교
  // 3. 매개변수로 받은 왼쪽 자식 트리의 오른쪽과 오른쪽 자식 트리의 왼쪽 비교
  return treeLeft.val == treeRight.val && symTest(treeLeft.left, treeRight.right) && symTest(treeLeft.right, treeRight.left)
}


