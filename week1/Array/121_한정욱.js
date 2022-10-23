/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
    //Given prices on ith day
    //Buy on the lowest and sell highest but it has to be after the selling
    //Requirements: 
    //Selling day must be after the buying day
    const n = prices.length;
    let min = prices[0];
    let max = 0;
    let profit = 0;
    
    if(n <= 1)
        {
            return 0;
        }
    //만약에, 배열에 수가 1 이거나 1보다작으면 0 
    else 
    {
        for(let days =0; days<n;days++)
            {
                min = Math.min(prices[days], min);//배역중에 제일작은 수를 찾는다
                profit = Math.max(profit,prices[days]-min);
                //제일 작은수를 뺀 수중에 제일 큰 값을 profit. 
            }   
        return profit;
    }    
 };