class Solution(object):
    def findContentChildren(self, g, s):
        """
        :type g: List[int]
        :type s: List[int]
        :rtype: int
        """
        
        g.sort()
        s.sort()
        content = 0 #만족한 아이들
        
        # 아이들을 만족시켜야 하기에 기준은 아이들로 함.
        # for child in g:
              #사용된 쿠키를 삭제하기 위해 range사용
        #     for i in range(len(s)):
        #         if child <= s[i]: #만족할 시
        #             content += 1
        #             s.pop(i)
        #             break
        # return content
        
        #refactoring
        i,j = 0,0  #아이들과 쿠키 인덱스
        while i < len(g) and j < len(s):
            if g[i] <= s[j]:    #만족 시
                i,content = i+1,content+1
            j += 1  #쿠키 사용
        return content
