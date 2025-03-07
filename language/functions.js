/*Functions in JS*/
//create
function hello(){
    console.log('Hello World');
}
//function call
hello();

/*Functions with Arguments 
values we pass to the function*/
function printName(name,age){
    console.log(`Your name is : ${name}`);
    console.log(`Your age is : ${age}`);
}
printName("shahnawaz",21);
printName('Shahil'); //undfined

/*Return
return keyword is used to return some value from the function*/
function sum(a,b){
    return a+b;
}
console.log(sum(sum(2,4),2));

/*Scope
Scope determines the accessibility of variables,objects and function from different parts
.function , .block ,.lexical, .globals*/
/*function Scope: 
Variables defined inside a function are not accessible (visible) from outside the function.*/
/*Block Scope
Variables declared inside a{} block cannot be accessed from outside the block
only work let and const not the var.*/
{
    let a = 25;
    const b =35;
    var c =24;
}
// console.log(a);
// console.log(b);
console.log(c);// this can access outside the block scope.

/*Lexical Scope
A variable defined outside a function can be accessible inside another function defined after the variable declaration. 
The opposite is NOT true.
*/
function outerfunc(){
    //how innerfun can acess the variable before the decleraction of variable called hoisting
    function innerfun(){
        console.log(x);
    }
    // opposite is NOT true.
    // console.log(a);
    let x = 5;
    let y = 6;
    function innerfun(){
        let a =10;
        console.log(x);
    }
    innerfun();
}
outerfunc();
/*Dreict calling a inner funtion is not valid:  
innerfun();//innerfun is not defined at ...
*/


//Q
let greet  ='hello';//glabal Scope
function changeGreet(){
    let greet = 'namste'; //function scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);//lexical scope
    }
    innerGreet();
}

console.log(greet);
changeGreet();

//Return a Function
function oddEvenfactory(request){
    if(request=='odd'){
        return function(n){
        console.log(!(n%2==0));
        }
    }else if(request=='even'){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log('worng request');
    }
}

let request ='even';
let func = oddEvenfactory(request);
console.log(func(3));
console.log(func);

/*Methods
Actions that can be performed on an object. */
const cal ={
    //shortland
    add(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}

console.log(cal.num);
console.log(cal.add(2,2));
console.log(cal.sub(2,2));
console.log(cal.mul(2,2));
