class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        answer = ''
        symbols = [('M',1000),('D',500),('C',100),('L',50),('X',10),('V',5),('I',1)]
        for i in range(len(symbols)):
            s,v = symbols[i][0],symbols[i][1]
            
            if v > num:
                continue

            if str(num)[0] == '4':
                answer +=  symbols[i][0] + symbols[i-1][0]
                num -= symbols[i-1][1] - symbols[i][1]
                continue
            if str(num)[0] =='9':
                answer += symbols[i+1][0] + symbols[i-1][0]
                num -= symbols[i-1][1] - symbols[i+1][1]
                continue
            
            
            answer += s*(num//v)
            num %= v
        return answer