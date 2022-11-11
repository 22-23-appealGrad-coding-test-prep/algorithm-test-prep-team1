class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransomNote = list(ransomNote)
        magazine = list(magazine)
        for value in ransomNote:
            if value in magazine:
                magazine.remove(value)
            else:
                return False
        return True