# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        left = []
        right = []

        def left_bfs(root):
            if root is not None:
                left.append(root.val)
            else:
                left.append(None)
                
            if root is not None:
                left_bfs(root.left)
                left_bfs(root.right)
                

        def right_bfs(root):
            if root is not None:
                right.append(root.val)
            else:
                right.append(None)
                
            if root is not None:
                right_bfs(root.right)
                right_bfs(root.left)
        
        left_bfs(root.left)
        right_bfs(root.right)
            
        return True if left==right else False
            
