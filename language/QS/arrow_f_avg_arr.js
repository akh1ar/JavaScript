//write an arrow funtion named arrayAverage that accepts an array of numbers and returs the average of these numbers.
let arrayAverage = (arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/(arr.length);
};

let arr =[1,2,3,4,5];
console.log(arrayAverage(arr));