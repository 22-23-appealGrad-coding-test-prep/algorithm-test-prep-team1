from collections import deque


class Solution:
    def isValid(self, s: str) -> bool:
        couple = {'(' : ')', '[' : ']', '{' : '}'}
        stack = []
        for i in s:
            if i in '([{':
                stack.append(i)
            elif i in '}])':
                if stack == []:
                    return False
                contrast = stack.pop()
                if couple[contrast] != i:
                    return False 
        
        return True if stack == [] else False