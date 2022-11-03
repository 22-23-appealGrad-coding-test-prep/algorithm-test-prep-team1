/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    //1. sorted된 2개의 linked List 존재
    //2. 그 두개를 하나의 정렬된 linked List로 합쳐주는 문제
    //3. linked List가 null인 경우도 고려해야한다.
    
    
    let l1 = list1;
    let l2 = list2;
    
    if (!l1){
       return l2; 
    } 
    if (!l2){
        return l1;
    }

    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } 
    else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
     }
};

