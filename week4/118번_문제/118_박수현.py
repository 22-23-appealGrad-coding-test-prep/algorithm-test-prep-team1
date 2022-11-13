class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        elif numRows == 1:
            return [[1]]
        elif numRows == 2:
            return [[1], [1, 1]]
        
        pascal_list = [[1], [1, 1]]
        for row in range(2, numRows):
            pascal_list.append([1])
            for index in range(1, row):
                try:
                    pascal_list[row].append(pascal_list[row-1][index-1]+pascal_list[row-1][index])
                except IndexError:
                    print("Index ",index," does not exist")
            pascal_list[row].append(1)
        return pascal_list
