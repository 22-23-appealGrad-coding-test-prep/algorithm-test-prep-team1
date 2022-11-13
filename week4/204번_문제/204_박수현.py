# 방법 1 > 시간 초과 남
# class Solution:
#     def countPrimes(self, n: int) -> int:
#         def prime(x):
#             for i in range(2, x):
#                 if x%i == 0:
#                     return 0
#             return 1
#         cnt = 0
#         for i in range(2, n) :
#                 cnt += prime(i)
#         return cnt

# 방법 2 > 시간 초과 남
# class Solution:
#     def countPrimes(self, n: int) -> int:
#         cnt=0
#         ch=[0]*(n+1)

#         for i in range(2,n):
#             if ch[i]==0:
#                 cnt+=1
#                 for j in range(i,n,i):
#                     ch[j]=1
                
#         return cnt

# 방법 3 > 시간 초과 남^^
# class Solution:
#     def getPrimaryNum_Eratos(N): 
#         nums = [True] * (N + 1) 
        
#         for i in range(2, len(nums) // 2 + 1): 
#             if nums[i] == True: 
#                 for j in range(i+i, N, i): 
#                     nums[j] = False 
#         return [i for i in range(2, N) if nums[i] == True]
    
#     def countPrimes(self, n: int) -> int:
#         prime_nums = Solution.getPrimaryNum_Eratos(n)
        
#         return len(prime_nums)

# 모르겠어요 이건 아니지 왜 다 시간초과냐