/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    //if x is smaller than zero it will be always zero
    if(x < 0 ){
        return false;
    }
    //Change the integer x into string
    let num = String(x);
    //Chage the string into array
    const arr = [...num];
    //reverse the array;
    let reverse = arr.reverse("");
    //change reverse array into string;
    reverse =  reverse.toString();
    //remove "," 
    const output = reverse.replace(/,/g, "");
    if(num === output){
        return true;
    }
    else{
        return false;
    }
    
};