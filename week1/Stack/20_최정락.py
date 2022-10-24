class Solution(object):
    def isValid(self, s):   
        list = []

        if len(s)%2 == 1:
            return False
    
        for i in s:
            if (i == '(') or (i == '[') or (i == '{'):
                list.append(i)
            if (i == ')') or (i == ']') or (i == '}'):
                if len(list) == 0:
                    return False
                if (list[-1] == '(' and i == ')') or (list[-1] == '[' and i == ']') or (list[-1] == '{' and i == '}'):
                    list.pop()
                else:
                    return False

        if len(list) == 0:
            return True
        else:
            return False