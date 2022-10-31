/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {

    let index1 = m-1;
    let index2 = n-1;
    
    for (let i = n+m-1; i >= 0 && index2 >= 0; i--){
        const num1 = nums1[index1];
        const num2 = nums2[index2]
        
        if (index1 >= 0 && num1 > num2){
            nums1[i] = num1;
            index1--;
        } else {
            nums1[i] = num2;
            index2--;
        }
    }
  
};