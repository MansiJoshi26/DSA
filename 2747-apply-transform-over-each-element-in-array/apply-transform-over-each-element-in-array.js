/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const result= [];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i))
    }
    return result;
};

function plusone(n){
    return n+1;
}
function plusI(n,i){
    return n+i;
}
function constant(){
    return 42;
}


