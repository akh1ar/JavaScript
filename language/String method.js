// Trim method: remove the space st and end change is not refect in orignal string
// let password = prompt('Enter your Password: ');
// console.log(`Your password is: ${password.trim()}`);

// console.log(`Your password is: ${password}`);

let fname='Shahnawaz';
console.log('Name in lower case: '+fname.toLowerCase());
console.log('Name in Upper case: '+fname.toLocaleUpperCase());
/*String are Immutable in JS
NO changes can be made to strings
Whenever we do try to make a change, a new string is created and old one remains same*/
console.log('Orginal from of str: '+fname);

/*String methods with Arguments
Argument is a some value that we pass to the method.*/
let me ='ShahnawazAkhtar';
/*Index of
returns the first index of occurrence of some value in string. Or give -1 if not found*/
console.log(me.indexOf("Akhtar"));//idx is 9
console.log(me.indexOf("J"));// -1
console.log(me.indexOf("a"));//idx is 2

/*Method Chaining
Using one method after another.Order of execution will be left to right*/
let massge = '   Shahnawaz Akhtar   ';
console.log(massge.toUpperCase().trim());

/*Slice
Returns a part of the original string as a new string*/
console.log(massge.trim().slice(0,9).toLowerCase());
console.log(me.slice(9));
console.log(me.slice(-3));// convet string lenth 14-3 =11

/*Replace 
searches a value in the string & returns a new string with the value replaced
*/
console.log(me.replace("Shahnawaz","I am "));
console.log(me.replace("a","!"));//replace the 1st occurrence.

/*Repeat
Returns a string with the number of copies of a string*/
console.log(me.repeat(2));