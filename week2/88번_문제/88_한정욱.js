/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(num1, m, num2, n) {
    //Deleting All the zero
    for(let i=0; i<num1.length;i++){
     
            while(num1[i] === 0 && i>m-1){
                  num1.pop();
            
       }
    }
    //Deleting All the zero
    for(let i=0; i<num2.length;i++){
        
            while(num2[i] === 0  && i>n-1){
              num2.pop();
            }
        
    }
    //Merge the two array
    const newArray = num1.concat(num2);
    //Sort the array
    newArray.sort(function(a, b)  {
  return a - b;
});
    console.log(newArray);
    num1.length =0;//Array reset
    for(let j=0;j < newArray.length;j++){
        num1[j]= newArray[j];
    }
};

