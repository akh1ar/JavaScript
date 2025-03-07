// Print the factorial of a number n
let n = prompt("enter a number: ");
let fact =1;
for(let i=1;i<=n;i++){
   fact*=i;
}
console.log(`factorial of ${n} is ${fact}`);