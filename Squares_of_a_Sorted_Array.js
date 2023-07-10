var sortedSquares = function(nums) {
    let sqr = nums.map(item=>Math.pow(item,2)).sort((a,b)=>a-b);
    return sqr;
};

console.log(sortedSquares([-7,-3,2,3,11]));