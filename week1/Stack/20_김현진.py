class Solution:
    def isValid(self, s: str) -> bool:
        sList = list(s)
        stack = []

        for i in sList:
            if i == '[' or i == '(' or i == '{':
                stack.append(i)
            elif len(stack) != 0:
                if ((i == ']' and stack[-1] == '[') or (i == '}' and stack[-1] == '{') or (
                        i == ')' and stack[-1] == '(')):
                    stack.pop()
                else:
                    return False
            else:
                return False
        if len(stack) != 0:
            return False
        return True
