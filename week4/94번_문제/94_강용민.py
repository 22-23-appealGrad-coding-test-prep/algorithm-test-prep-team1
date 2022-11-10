# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def inorderTraversal(self, root):
        res =[]
        """
        :type root: TreeNode
        :rtype: bool
        """
        def dfs(node):
            if node is not None:
                dfs(node.left)
                res.append(node.val)
                dfs(node.right)
        
        dfs(root)
        return res