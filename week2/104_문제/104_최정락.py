# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def maxDepth(self, root):
        
        if root is None:
            return 0
        else:
            n = 0
            copy = []
            copy.append(root)
            
            while copy:
                n += 1
                tree = []
                
                for i in copy:
                    if i.left:
                        tree.append(i.left)
                    if i.right:
                        tree.append(i.right)
                
                copy = tree
            
            return n