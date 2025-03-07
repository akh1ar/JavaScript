// Write a JS program to find the sum of digits in a number
let number = 287152;
let sum =0;
while(number>0){
   let digit = number %10;
   sum+=digit;
   number = Math.floor(number/10);
}
console.log(sum);