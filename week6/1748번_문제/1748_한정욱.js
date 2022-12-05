/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    const map = {}
    
    let sum = 0
    
    for(let num of nums) {
        map[num] = map[num] + 1 || 1
    }
    
    for(let key in map) {
        if(map[key] < 2) {
            sum += Number(key)
        }
    }
    
    return sum
};