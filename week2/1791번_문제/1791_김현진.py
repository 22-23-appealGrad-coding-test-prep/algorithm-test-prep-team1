class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        ans = set(edges[0]) & set(edges[1])
        return ans.pop()
