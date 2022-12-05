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
            l1 = l1.next;/**
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
               let newList = new ListNode(0);
               let head = newList;
               let carry = 0; 
           
               while(l1 || l2 ){
                   const sum =(l1 ? l1.val :  0) + (l2 ? l2.val : 0) + carry;
                   //l1 l2 존재하는지 확인하고  캐리를 더함
                   newList.next = new ListNode(sum >= 10 ?  sum-10 : sum );
                   carry = sum >= 10 ? 1 : 0;
                   //carry = sum >= 10 ? Math.floor(sum/10) : 0;
                   l1 = l1 ? l1.next : null;
                   l2 = l2 ? l2.next : null;
                   newList = newList.next;
               }
           
               if(carry> 0){
                   newList.next = new ListNode(carry);
               }
               return head.next;
           };
            l1.val = l1.val +1;
            }   
            l1 = l1.next;
            l2 = l2.next;
        }
    }
    return head;
};