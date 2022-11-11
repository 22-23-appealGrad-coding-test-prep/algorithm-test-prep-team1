# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        def _inorder(node: Optional[TreeNode]):
            if node.left:
                _inorder(node.left)
            inorder_list.append(node.val)
            if node.right:
                _inorder(node.right)
        inorder_list = []
        if root != [] and root != None:
            _inorder(root)
        return inorder_list
