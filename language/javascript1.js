/*forEach
arr.forEach (some funtion definition or name) */
let arr = [1, 2, 3, 4, 5];
//using normal funtion
let print = function (el) {
  // console.log(el);
};
arr.forEach(print);
//using arrow funtion.
arr.forEach((el) => {
  // console.log(el);
});

//using foreach in obj.

let obj = [
  {
    name: "Shahnawaz",
    marks: 98,
  },{
    name: "Shahil",
    marks: 90,
  },{
    name: "irfan",
    marks: 80,
  },
];

obj.forEach((stu) => {
  console.log(stu.marks);
});

/*Map
let newArr = arr.map(some funtion defintion or name); */
//using create a new arr.
let num = [1, 2, 3, 4];
let double = num.map((el) => {
  return el * 2;
});
console.log(double);
let gpa = obj.map((el) => {
  return el.marks / 10;
});
console.log(gpa);

/*Filter
let newArr = arr.filter(some funtion definition or name);
*/
let nums = [2, 3, 1, 5, 6, 2, 7, 8, 9];
let ans = nums.filter((el) => {
  return !(el % 2 == 0);
});
console.log(ans);

/*Every method:is like a logical oprator AND(&&)
Returns true if every element of array gives true for some funtion.Else returns false.
arr.every(some fun def or name)*/

let arr1 = [2, 4, 3];
let ans1 = arr1.every((el) => {
  return el % 2 == 0;
});
console.log(ans1);

/*Some method: is like a logical operator OR(||) 
Retuns true if some elements of array give true for some funtion.Else returns false.*/

let ans2 = arr1.some((el) => {
  return el % 2 != 0;
});
console.log(ans2);

/*Reduce
Reduce the array to a single value
arr.reduce(reducer function with 2 var for (accumlator, element)); */
let arr3 = [1, 2, 3, 4];
let ans3 = arr3.reduce((res, el) => {
  console.log(res);
  return res + el;
});
/*[1,2,3,4]
  step  res , el  + 
    01  (0    1)  1
    02  (1    2)  3
    03  (3    3)  6
    04  (6    4)  10 this return*/
console.log(ans3);
/*Default Parameters
Giving a default value to the arguments */
function sum(a, b = 1) {
  //try make defult pram in last pram
  return a + b;
}
console.log(sum(1)); //1st passing always assign to 1st pram

/*Spread
Expands an iterable into multiple values
...arr */
let nums1 = [2, 3, 4, 5, 6, 7, 8, 9, 1, 0];
// console.log(Math.min(arr[0],arr[1],arr[2]));//this very time consuming.
console.log(Math.min(...nums1));
//with string
console.log(..."ShahnawazAkhtar");
//with array literals
let arr4 = [1, 2, 3, 4, 5];
let newarr = [...arr4];
console.log(newarr);
arr4.push(7);
console.log(arr4);
console.log(newarr);
/*Spread
with object literals */
/*Spread
with object literals */
const data = {
  email: "goku@ultra-instinct.com",
  password: "kakarot",
};
const dataCopy = { ...data, Universe_no: 7, Race: "Saiyan" };
console.log(dataCopy);
//Arguments: 
function min(){
  //here is no passing any args in a pram
  console.log(arguments.length);
  /*this arguments is not excat arr there is work arr methods like push */
  //arguments.push(1);//TypeError: arguments.push is not a function
}
/*Rest
Allow a function to take an indefinite number of arguments and bundle them in an array*/
//when we to apply arr methods in arguments using rest.(...args)
function sum(msg,...args){
  console.log(msg);
  return args.reduce((sum,el)=>sum+el);
}
console.log(sum('Sum: ',1,2,3,4,5,6,7,8,9,10));

/*Destructuring
Stroing values of array into multiple variables */
let names = ['Shahnawaz','Shahil','Saif','Irfan'];
// this is very time consuming method
/*
let winner = names[0];
let ruunerup = names[1];
let second_ruunerup = names[2];*/

//TO avoid this process to using Destructuring.
let [winner,ruunerup,...second_ruunerup]=names;

/*Destructuring - Objects 
Destructuring is using for compact syntax*/
const DB ={
  name:"Goku",
  age: 30,
  universe: 7,
  forms: ['SS','SS4','MUI','Kaioken'],
  username: 'goku@Ultra-Instinct.com',
  passowrd: 'Kakarot',
  city: 'Osaka'
};
//here match the key name store the value
let {username,passowrd}=DB;
//but want key name change.
//here wnat to change dricty not changes because prefrence is getting Obj  add is possible like , freind:'vigeta'
let {username:user,passowrd:secret,city: place ='Delhi'} =DB;