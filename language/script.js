let firstName = 'Shahnawaz';
let secondName= 'Akhtar';
console.log(firstName+" "+secondName);

//Template Literals
 console.log(`${firstName} ${secondName}`);

 //compare operator

 let n = 5;
 let str = '5';
 console.log(typeof(n));
 console.log(typeof(str));
 if(n==str){
    console.log("true\n");
 }else{
    console.log("false\n");
 }

 //=== compares type & value

 if(n===str){
    console.log("true\n");
 }else{
    console.log("false\n");
 }
/*
"123"==123 : true
" "==0 : true
0== false : true
null==undefined :true
*/

/*falsy values
false, 0, -0, 0n(Bight value), ""(empty string), null, undefined, NaN
*/
/*truthy values
evertything else
*/
if(false){
    console.log('it has true value');
}else{
    console.log('it has false value');
}
