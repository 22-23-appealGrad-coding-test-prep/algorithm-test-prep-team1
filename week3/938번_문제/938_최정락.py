class Solution(object):
    def rangeSumBST(self, root, low, high):

        total = 0

        if root == None: 
            return 0

        if low <= root.val <= high:  
            total += root.val

        if root.val > low:
            total += self.rangeSumBST(root.left, low, high)

        if root.val < high:
            total += self.rangeSumBST(root.right, low, high)

        return total