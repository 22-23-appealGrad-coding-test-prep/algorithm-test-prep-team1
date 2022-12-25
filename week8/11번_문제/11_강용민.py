class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        count = len(height)-1
        front, back = 0,count
        area = 0
        while count >= 0:
            area = max(area,(back-front)*min(height[front],height[back]))
            if height[front] >= height[back]:
                back -= 1
            else:
                front += 1
            
            count -= 1
        return area