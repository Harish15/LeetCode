var findNumbers = function(nums) {
    let cnt = 0;
    nums.forEach((element,i,arr) => {
        if (element.toString().length%2==0){
            cnt++
        }
    });
    return cnt;
};

console.log(findNumbers([12,345,2,6,7896]));