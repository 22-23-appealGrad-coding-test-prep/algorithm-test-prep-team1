class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        left = [root.left]
        right = [root.right]

        while left and right:
            lNode = left.pop(0)
            rNode = right.pop(0)

            if not lNode and not rNode:
                continue
            if not lNode or not rNode:
                return False

            if lNode.val != rNode.val:
                return False

            left.append(lNode.left)
            left.append(lNode.right)
            right.append(rNode.right)
            right.append(rNode.left)
        return True