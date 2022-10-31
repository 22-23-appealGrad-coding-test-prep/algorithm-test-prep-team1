class Solution(object):
    def findCenter(self, edges):
        
        edge1 = edges[0][0]
        edge2 = edges[0][1]
        
        if edges[1][0] == edge1 or edges[1][1] == edge1:
            return edge1
        return edge2