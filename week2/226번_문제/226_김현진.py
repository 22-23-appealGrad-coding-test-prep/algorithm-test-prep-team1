from collections import deque

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        q = deque([root])

        while q:
            a = q.popleft()
            if a:
                a.left, a.right = a.right, a.left

                q.append(a.left)
                q.append(a.right)
        return root
