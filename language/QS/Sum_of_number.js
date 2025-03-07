//Create a function that return the sum of numbers from 1 to n.
function sum(n){
    let s =0;
    for(let i=1;i<=n;i++){
        s+=i;
    }
    return s;
}
console.log(sum(10));