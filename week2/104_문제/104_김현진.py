class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        answer = max(self.maxDepth(root.left), self.maxDepth(root.right))
        return answer + 1
