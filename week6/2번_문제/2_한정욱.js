/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head  = l1; 
    while(l1 != null && l2 != null){
        let sum =0; 
        sum = l1.val + l2.val;
        if(sum > 9){
            console.log(sum);
            l1.val = sum -10;
            l1 = l1.next;
            l1.val = l1.val +1;
        }
        else{ 
            l1.val = sum;
            l1 = l1.next;}
        l2 = l2.next;
    }
    if(l1 != null){
        while(l1 != null)  {
            if( l1.val>9){
            l1.val = l1.val -10;
            l1 = l1.next;
            //l1.val = l1.val +1;
            }   
        }
    }
  
    if(l2 != null){
        while(l2 != null){
            
            l1.val = l2;
             if(l1.val>9){
            l1.val = l1.val -10;
            l1 = l1.next;
            l1.val = l1.val +1;
            }   
            l1 = l1.next;
            l2 = l2.next;
        }
    }
    return head;
};