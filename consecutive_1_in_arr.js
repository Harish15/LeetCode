var findMaxConsecutiveOnes = function(nums) {

    let first = 0
    let second = 0;

    nums.forEach((item, i, arr)=>{
        if(item==1){
            first ++;
        }else if(item == 0){   
            if(second<first){
                second = first;
            }         
            first = 0;
        }
    })

    return first>=second ? first : second;
};

console.log(findMaxConsecutiveOnes([1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));