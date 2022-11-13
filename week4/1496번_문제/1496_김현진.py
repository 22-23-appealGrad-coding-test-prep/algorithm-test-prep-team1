class Solution:
    def isPathCrossing(self, path: str) -> bool:
        dx = [0, 0, 1, -1]
        dy = [-1, 1, 0, 0]
        move_types = ['W', 'E', 'N', 'S']
        x = 0
        y = 0
        li = []
        li.append([0,0])

        for plan in path:
            for i in range(len(move_types)):
                if plan == move_types[i]:
                    nx = x + dx[i]
                    ny = y + dy[i]
            x, y = nx, ny
            if [x,y] in li:
                return True
            li.append([x,y])
