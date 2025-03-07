//Create a function that returns the concatenation of all strings in an array.
let arr=["hii",'hello',"bye",'!'];
function concatenation(arr){
    let result="";
    for(let i=0;i<arr.length;i++){
        result +=arr[i];
    }
    return result;
}
console.log(concatenation(arr));