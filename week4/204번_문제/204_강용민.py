class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n <2:
            return 0
        sieve = [True] *n
        sieve[0],sieve[1] = False, False
        
        #에라토스테네스의 체
        #루트까지만 해도 되는 이유는 소수의 성질떄문이다.
        for i in range(2,int(n**0.5)+1):
            if sieve[i]:
                sieve[i*i:n:i] = [False]*len(sieve[i*i:n:i])
        return sieve.count(True)