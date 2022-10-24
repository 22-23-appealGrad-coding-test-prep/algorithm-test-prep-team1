/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    [...s];// string to char for easier use
     const n = s.length;// number of char in the string
    if(n === 1)
        //if there is only one char that means it is not closed so it is always false
        {
            return false;
        }
    //the brackets does not have to right next to each other, it just has to be closed if it is open
    //using while loop
    
        //check if bracket opens
        //if it opens insert the for loop to find the closing bracket
        
        let result;
        let i = 0; 
        let j = 0;
        let open = [];
        var diction= {};
        diction['('] = ')';
        diction['{'] = '}';
        diction['['] = ']';
        
        
        for(let z of s){
            if (s[i] ===')' || s[i] === '}' || s[i]=== ']')
                {
                    return false;
    }
        else if((z === '(') || (z === '{') || (z === '['))
           {
               open.push(z);
           }
        else 
            {
                let last = open[open.length - 1];
                if((z === ')' && last === '(') || (z === '}' && last === '{') || (z === ']' && last === '[') )
                {
                    open.pop();
    
                }
                else
                    return false;
            }
        }
    //     for(i ; i<n; i= i+2)
    //         {
    // if((s[i]=== '(') && s[i+1] === ')' || (s[i]=== '[') && s[i+1] === ']' || (s[i]=== '{') && s[i+1] === '}' ){
    //                 result = true;
    //             }
    //         else
    //             result = false;
    //         }
        console.log(open.length);
    
        return open.length === 0 ;
    };