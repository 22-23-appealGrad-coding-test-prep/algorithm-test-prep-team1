class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        stack = [root]
        sum = 0

        while stack:
            node = stack.pop()
            if node:
                if low < node.val:
                    stack.append(node.left)
                if node.val < high:
                    stack.append(node.right)
                if low <= node.val and node.val <= high:
                    sum += node.val
        return sum