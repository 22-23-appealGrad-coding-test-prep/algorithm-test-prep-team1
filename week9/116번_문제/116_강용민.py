from collections import deque
class Solution:
    # @param root, a tree link node
    # @return nothing
    def connect(self, root):
        if root is None: return
        q = deque([root])
        prevRight = None
        while len(q) > 0:
            cur = q.popleft()
            if cur.right is not None:
                if cur.next is not None:
                    cur.right.next = cur.next.left
                q.append(cur.right)
            if cur.left is not None:
                cur.left.next = cur.right
                q.append(cur.left)