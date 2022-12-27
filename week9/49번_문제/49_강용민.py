class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        dict_answer = {}
        answer = []
        for a in strs:
            key = ''.join(sorted(a))
            if key in dict_answer:
                dict_answer[key] += [a]
            else:
                dict_answer[key] = [a]
        for value in dict_answer.values():
            answer.append(value)
        return answer