/**
 * @param {number[]} nums
 * @return {number[]}
 */
      
 var frequencySort = function(nums) {
    let maps = new Map();
    for(let i of nums){
        maps.set(i,(maps.get(i)|| 0) +1)
    }
    return nums.sort((a,b) => {
        if(maps.get(a) === maps.get(b)){
            return b-a;
        }
        return maps.get(a) - maps.get(b);
    })
};