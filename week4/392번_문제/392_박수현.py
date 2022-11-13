# 이거 테스트케이스 17번째에서 틀렸다고 나오고 왜 그런지도 원인 파악을 했는데 머리가 안돌아가서 못 고쳤어요
# 노력 점수라도 줘잉ㅠ
import copy
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        print(t)
        if s in t:
            return True
        s = list(s)
        t = list(t)
        result = []
        wonder = []
        for value in s:
            if value in t:
                wonder.append(value)
                i = t.index(value)
                result.append(i)
                t[i] = ""
            else:
                return False
        result_subsequence = copy.deepcopy(result)
        result_subsequence.sort()
        return result == result_subsequence
