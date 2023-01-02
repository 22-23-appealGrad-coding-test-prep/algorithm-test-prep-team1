class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return root
        def bfs(root):
            if root.left:
                root.left.next = root.right
                if root.next:
                    root.right.next = root.next.left
                bfs(root.left)
                bfs(root.right)
        bfs(root)
        return root