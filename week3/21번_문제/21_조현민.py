# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        temp = head = None
        list = []

        while list1 or list2:
            if list1 == None:
                list.append(list2.val)
                list2 = list2.next
            elif list2 == None:
                list.append(list1.val)
                list1 = list1.next
            elif (list1.val < list2.val):
                list.append(list1.val)
                list1 = list1.next
            else:
                list.append(list2.val)
                list2 = list2.next

        for val in sorted(list):
            if not temp:
                temp = ListNode(val)
                head = temp
            else:
                temp.next = ListNode(val)
                temp = temp.next

        return head
