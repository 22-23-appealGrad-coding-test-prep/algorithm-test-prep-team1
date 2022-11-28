class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int len_cost = cost.length;
        for(int i = 2; i<len_cost; i++){
            cost[i] += Math.min(cost[i-1],cost[i-2]);
        }
        return Math.min(cost[len_cost-1],cost[len_cost-2]);
    }
}