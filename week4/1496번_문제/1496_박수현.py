class Solution:
    def isPathCrossing(self, path: str) -> bool:
        path = list(path)
        my_point = [(0, 0)]

        index = 0
        for value in path:
            if value == "N":
                my_point.append((my_point[index][0], my_point[index][1] + 1))
            elif value == "S":
                my_point.append((my_point[index][0], my_point[index][1] - 1))
            elif value == "E":
                my_point.append((my_point[index][0] + 1, my_point[index][1]))
            elif value == "W":
                my_point.append((my_point[index][0] - 1, my_point[index][1]))
            index += 1
        
        return len(set(my_point)) != len(my_point)
