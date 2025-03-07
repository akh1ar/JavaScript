//Write a JavaScript functions that returns array elements larger than a number.
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function GetElements(arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
        console.log(arr[i]);
        }
    }
}
etElements(arr,num);