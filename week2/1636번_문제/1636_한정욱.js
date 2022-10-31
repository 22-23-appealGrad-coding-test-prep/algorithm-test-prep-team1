/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    //처음 생각했던 방식은, 먼저 객체를 만들어 frequency를 확인하고 sorting. 
    // sorting된 vaklue값들을 다시 key 값들로 바꿔주면서 다른배열에 저장.
    //해봤는데 안됨... 
        
        let n = nums .length;
        let temp = {}; 
           
        //fre upto nums
        for(let i=0; i< n; i++){
            //null이 아니면 
            if(!temp[nums[i]]){
                temp[nums[i]] = [nums[i], 1];
            }   
            else{
                temp[nums[i]][1]++;
            }
        }
    let val = Object.values(temp);//frequency value
    val.sort((a,b)=>{
        if(a[1]==b[1]){
            return b[0]-a[0];
        }else{
            return a[1]-b[1];
        }
    });
    
    let res = [];
    for(let v of val){
        for(let i=1;i<=v[1];i++){
            res.push(v[0])
        }
    }
        return res;    
    };