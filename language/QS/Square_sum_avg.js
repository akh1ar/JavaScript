// Square and sum the array elements using the arrow function and then find the average of the array.

let arr = [1,2,3,4,5];
let Square  = arr.map((arr)=>arr*arr);
console.log(Square);
let sum = Square.reduce((res,el)=>res+el);
let avg= sum/arr.length;
console.log(avg);