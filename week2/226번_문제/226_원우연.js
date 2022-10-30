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
 var invertTree = function(root) {
    //1. 주어진 트리의 좌,우 서브트리를 반전시키는 문제
    //2. 트리구조에 대한 이해가 필요
    //3. 좌측과 우측 서브트리를 어떻게 접근시킬지 고려
    //4. DFS 재귀함수를 이용해서 탐색할 계획

    if (root === null){
      return root; 
    } 

    let temp = root.right;
    root.right = root.left;
    root.left = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

