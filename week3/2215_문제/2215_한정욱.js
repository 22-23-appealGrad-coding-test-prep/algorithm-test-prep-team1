/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 var findDifference = function(nums1, nums2) {
    
    let n1 = nums1.length;
    let n2 = nums2.length;
    
    let temp = []
    let result = [[],[]]
    for(let i = 0; i<n1; i++){
        for(let j=0; j<n2; j++){
            if(nums1[i]===nums2[j]){
                temp.push(nums1[i]);
            }
        }
    }   
    let k =0; 
    let p =0;
    for(let i = 0; i<n1; i++){
        if((!temp.includes(nums1[i]))&&(!result[0].includes(nums1[i]))&& !undefined ){
            
            result[0][k++] = nums1[i];
            
        }
        if((!temp.includes(nums2[i]))&&(!result[1].includes(nums2[i]))&& !undefined){
            result[1][p++] = nums2[i];
        }
    }
    
    console.log(result)

    return result

};














