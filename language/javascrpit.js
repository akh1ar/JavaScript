/*this : keyword 
'This' keyword refers to an object that is executing the current piece of code*/
const stu = {
    name:'Shahnawaz',
    age: 22,
    eng: 90,
    math: 99,
    phy:97,
    getAvg(){
        console.log(this);
        let avg =(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}
stu.getAvg();
//there is no any object by out defulat windows obj here to show
function getAvg(){
    console.log(this);
}
getAvg();

/*try & catch
The try statement allow you to define a block of code to be tested for errors while it is begin executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.*/
console.log('hello');
console.log('hii');
console.log('he');
// let a=0;
try{
    console.log(a);
}catch(err){
    console.log('a is not defined')
    console.log(err);
}
console.log(7);

/*Miscellaneous Topic */
//Arrow Function
//no  and multiple argument pretestes compelsarry but one argumt prentess is not nessary.
const sum = (a,b)=>{
    console.log(a+b);
}
sum(1,2);
//Arrow funtion implicit return : automatic return
const mul =(a,b)=>a*b;
const cube =(n)=>n*n*n;
const pow =(a,b)=>a**b;
console.log(mul(2,2));
console.log(cube(2));
console.log(pow(2,3));

/*Set Timeout
setTimeout(function,timeout) */
console.log('hi there!');
setTimeout( ()=>{
    console.log("My Wrold");
},4000);
console.log("Welcome to: ");

/*setInterval
(function,timeout) */
let id =setInterval(()=>{
    console.log('Shahnawaz');
},2000);

//want to stop the setInterval to set the id and pass to the predefined function clearInterval(id);
let id2 =setInterval(()=>{
    console.log('khan');
},1000);

// clearInterval(id2);//this only work browser console
/*this : with Arrow Functions */
const student ={
    name: 'Shahnawaz',
    marks: 95,
    prop: this,//global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: ()=>{
        console.log(this);
        return this.marks;
    },
    //here this is calling under the arrow function when go to the parent funtion this.
    getInfo : function(){
        setTimeout( ()=>{
            console.log(this);
        },2000);
    },
    getInfo2 : function(){
        setTimeout( function(){
            console.log(this);
        },2000);
    },
};
console.log(student);
console.log(student.getName());
//why undfined: when calling arrow function this is not a calling object. arrow funtion this is parent's scope
console.log(student.getMarks());//parent's scope -> windows
console.log(student.getInfo());