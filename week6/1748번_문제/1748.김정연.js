/**
 * @param {number[]} nums
 * @return {number}
 */
// 미해결
 var sumOfUnique = function(nums) {
    return findOfUnique(nums).reduce((a,b) => a+b , 0)
};

const findOfUnique = function(nums) {
    return nums.filter(num => nums.filter(n => n === num).length === 1)
}