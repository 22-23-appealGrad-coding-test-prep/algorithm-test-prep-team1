/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    s = s.split('');
    let stack = [];
    let obj = {'(':')','{':'}','[':']'};
    for(let i of s){
        if(i == '(' || i == '{' || i == '['){
            stack.push(obj[i]);
        }
        else if(stack.pop() != i){
             return false;
        }
    }
    if(stack.length == 0){ 
       return true;
    }
    return false;
};