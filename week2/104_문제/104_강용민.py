# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def maxDepth(self, root):
        depthList = []
        
        def dfs(node,count):
            if node is None:
                depthList.append(count)
                return
            count += 1
            dfs(node.left,count)
            dfs(node.right,count)
        
        count = 0
        dfs(root,count)
        return max(depthList)

        