class Solution(object):
    def isPathCrossing(self, path):
        
        previous = [(0,0)]
        x,y = 0,0

        for i in path:
            if i == 'E':
                x += 1
            if i == 'W':
                x -= 1
            if i == 'N':
                y += 1
            if i == 'S':
                y -= 1
            if (x,y) in previous:
                return True
            else:
                previous.append((x,y))

        return False