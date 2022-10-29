# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def invertTree(self, root):
        
        if root is None:
            return root
        else:
            # copy = []
            # copy.append(root)
            copy = root
            
            copy.left, copy.right = self.invertTree(root.right), self.invertTree(root.left)

            return copy