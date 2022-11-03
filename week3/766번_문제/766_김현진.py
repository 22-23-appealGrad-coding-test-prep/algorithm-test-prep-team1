class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
        print(len(matrix))
        if len(matrix) == 1:
            return True
        for i in range(len(matrix)-1):
            if len(matrix[i]) == 1:
                return True
            for j in range(len(matrix[i])-1):
                if matrix[i][j] != matrix[i+1][j+1]:
                    return False
                else:
                    continue
        return True
