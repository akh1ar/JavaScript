let stu = ['Shahnawaz','Shahil','Saif','irfan','Sib'];
console.log(stu);
console.log(stu[0]);
console.log(typeof(stu));
console.log(stu.length);
//empty arr
let emparr=[];
console.log(emparr.length);
console.log([].length);
//acess string in arr:
console.log(stu[0][8]);
console.log(stu[0].length);

//arrays are mutable
let fruits = ['Mango','Apple','Litchi'];
fruits[0]='banana';
console.log(fruits);
fruits[10]='pineapple';
console.log(fruits);

//array methods
let cars =['Audi','BMW','Porsche','Ford Mustang','McLaren','Ferrari','Lamborghini'];
console.log(cars);
//add to end
cars.push('land rover');
console.log(cars);
//delete from end & returns it
cars.pop();
console.log(cars);
//add to start
cars.unshift('Range Rover');
console.log(cars);
//delete from end & returns it
cars.shift();
console.log(cars);
//return exp:
let followers = ['a','b','c'];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);

/*Array Methods
IndexOf:return  index of something*/
let color=['red','yellow','blue'];

console.log(color.indexOf('red'));
//case sensestive
console.log(color.indexOf('RED'));
//not exsit
console.log(color.indexOf('green'));

//include: search for a vlaue return bool
console.log(color.includes('green'));
console.log(color.includes('blue'));

/*Array Methods
concat,reverse
*/
let primary = ['red','yellow','black'];
let secondary = ['orange','green','violet'];

//make a new arr not change orginal
console.log(primary.concat(secondary));
//change the orginal arr
console.log(primary.reverse());

/*Array Methods
slice: copies a portion of an array
slice have two argument but these are optional*/

let colors = ['red','yellow','blue','oragne','pink','white'];

console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-3));//5-3=2


/*Array Methods
changes reflect in orignal arr
splice : remove /replaces /add elements in place
splice(start,deleteCount,item0...itemN) deletecount is optional*/ 
let car =['Audi','BMW','Porsche','Ford Mustang','McLaren','Ferrari','Lamborghini'];
console.log(car);
console.log(car.splice(4));
console.log(car);
console.log(car.splice(0,1));
console.log(car);
console.log(car.splice(0,1,'Range Rover','ToYoTa'));
console.log(car);
console.log(car.splice(1,0,'Mercedes'));
console.log(car);


/*Array Methods
changes are apply in orginal arr
sort: sorts an array*/
console.log(car.sort());
let chars = ['b','d','c','e','a','f'];
console.log(chars.sort());
//in num sorting not the bases of number sorting based on convetion of string in UTF16 code
let nums = [99,89,67,42,100];
console.log(nums.sort());

//Array References
let arr = ['a','b'];
let arrcpy = arr;
console.log(arrcpy);
arrcpy.push('c');
console.log(arr);
//trunery operator
(arr==arrcpy)?console.log('True'):console.log('fasle');

/* Constant Array
const arr =[1,2,3,4];
arr store the address not value
when we will make constant type of arr when not able to change the address
arr1=arr;// TypeERROR: Assignament to constant variable
we able to change the store value in address of arr.
*/
const arr1= [1,2,3,4];
arr1.push(5);
arr1.push(6);
console.log(arr1);

/*Nested Arrays
Multidimesional arr */

let num = [[2,4,1],[3,6],[4,8]];
console.log(num);
console.log(num.length);
console.log(num[0]);
console.log(num[0].length);
console.log(num[0][0]);
