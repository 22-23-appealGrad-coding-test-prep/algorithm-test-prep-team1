class Solution(object):
    def findCenter(self, edges):
        """
        :type edges: List[List[int]]
        :rtype: int
        """
        # 메모리 , 시간 느림
        # setEdges = defaultdict(int)
        # for edge in edges:
        #     setEdges[edge[0]] += 1
        #     setEdges[edge[1]] += 1

        # setEdges = dict(map(reversed,setEdges.items()))
        # return setEdges[len(edges)]

        #30%상승
        # res = edges[0][0]

        # for i in range(1,len(edges)//2 + 1):
        #     if res not in edges[i]:
        #         res = edges[i-1][1]
                
        # return res

        return edges[0][0] if edges[0][0] in edges[1] else edges[0][1]