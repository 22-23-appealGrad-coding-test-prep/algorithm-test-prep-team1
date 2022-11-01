class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        sen = ' '.join(s.split()) # 모든 경우 띄어쓰기 하나로 변경
        word = sen.split(' ')
        last = word[-1]
        return len(last)
