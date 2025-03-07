/*Reduce
finding maximum in an array
 */
let nums = [2,3,4,5,11,7,8,1,2];
let result = nums.reduce((res,el)=>{
    if(res<el){
        return el;
    }else{
        return res;
    }
});
console.log(result);