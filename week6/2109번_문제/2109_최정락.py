class Solution(object):
    def addSpaces(self, s, spaces):
        """
        :type s: str
        :type spaces: List[int]
        :rtype: str
        """
        # 첫번째 코드 타임아웃뜸
        # list = []
        # for i in range(len(s)):
        #     if i in spaces:
        #         list.append(" ")
        #         list.append(s[i])
        #     else:
        #         list.append(s[i])

        # return ''.join(list)

        j = 0
        list = []
        
        for i in range(len(s)):
            if j < len(spaces) and i == spaces[j]:
                list.append(" ")
                list.append(s[i])
                j += 1
            else:
                list.append(s[i])
        
        return ''.join(list)