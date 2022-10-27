class Solution:
    def firstUniqChar(self, s: str) -> int:
        collection = Counter(s)
        a = []
        for key, value in collection.items():
            if value == 1:
                a.append(key)
        if not a:
            return -1
        return s.index(a[0])
