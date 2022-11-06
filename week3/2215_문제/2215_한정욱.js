/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 var findDifference = function(nums1, nums2) {
    

    let l1 = new Set(nums1);
    let l2 = new Set(nums2);
    let diff1 = new Set([...l1].filter(num=> !l2.has(num)))
    let diff2 = new Set([...l2].filter(num=> !l1.has(num)))
    
    let result = [[...diff1],[...diff2]];
    return result;

    // let n1 = nums1.length;
    // let n2 = nums2.length;
    // let temp = []
    // for(let i = 0; i<n1; i++){
    //     for(let j=0; j<n2; j++){
    //         if(nums1[i]===nums2[j]){
    //             temp.push(nums1[i]);
    //         }
    //     }
    // }   
    // let k =0; 
    // let p =0;
    // for(let i = 0; i<n1; i++){
    //     if((!temp.includes(nums1[i]))&&(!result[0].includes(nums1[i]))&& !undefined ){
            
    //         result[0][k++] = nums1[i];
            
    //     }
    //     if((!temp.includes(nums2[i]))&&(!result[1].includes(nums2[i]))&& !undefined){
    //         result[1][p++] = nums2[i];
    //     }
    // }
    // return result
};













