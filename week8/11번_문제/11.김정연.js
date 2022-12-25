/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let Max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right){
        const Min = Math.min(height[left], height[right]);
        const Loc = Min * (right - left);

        Max = Math.max(Max, Loc);

        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }
    return Max;
};