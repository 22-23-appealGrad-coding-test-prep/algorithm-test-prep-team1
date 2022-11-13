class Solution(object):
    def countPrimes(self, n):
        #코드1
        #count = 0 
        # d = 0     
        # for i in range(2,n):
        #     for j in range(1,i):
        #         if i%j == 0:
        #             d += 1
        #     if d == 1:
        #         count += 1
        #     d = 0

        #코드2
        # primes = [2]
        # if n < 3:
        #     return 0
        # for i in range(3,n):
        #     for j in primes:
        #         if i%j ==0:
        #             break
        #         if j**2 > i:
        #             primes.append(i)
        #             break
        # return len(primes)

        if n < 2:
            return 0
    
        primes = [1] * n
    
        primes[0], primes[1] = 0, 0
    
        for i in range(2, int(n ** .5) + 1):
            if primes[i] != 0:
                for j in range(i ** 2, n, i):
                    primes[j] = 0
                
        return sum(primes)