class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        # Time Limit Exceeded

        # ch = list(s)
        # for i in range(len(spaces)):
        #     ch.insert(spaces[i] + i, " ")
        # a = ''.join(ch)
        # return a

        j = 0
        li = []

        for i in range(len(s)):
            if j < len(spaces) and i == spaces[j]:
                li.append(" ")
                li.append(s[i])
                j += 1
            else:
                li.append(s[i])

        return ''.join(li)