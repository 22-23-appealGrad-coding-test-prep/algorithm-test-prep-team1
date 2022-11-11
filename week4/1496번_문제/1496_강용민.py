class Solution(object):
    def isPathCrossing(self, path):
        """
        :type path: str
        :rtype: bool
        """
        direct = {'E':(1,0),'W':(-1,0), 'N':(0,1),'S':(0,-1)}
        locs = [(0,0)]
        x,y = 0,0
        
        for go in path:
            x += direct[go][0]
            y += direct[go][1]
            
            if (x,y) in locs:
                return True
            
            locs.append((x,y))
        return False