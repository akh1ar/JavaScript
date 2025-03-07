/*Object Literals
Used to store keyed collections complex entities
property =>(key,value)pair
Object are a collection of properties */
//create a Obj Literals
const student ={
    name: 'Shahnawaz',
    age: 22,
    marks: 94.2,
    city: 'Noida'
};

//Create an object literal for the properties of therad/ twitter post which includes-
const post ={
   username: '@shahnawazakh1ar',
   content: 'This is my #firstPost',
   likes: 150,
   reposts: 5,
   tags:['@shahilShekih','@saify','@nobitaX20']
};

//Get Values -- Acess the data.
console.log(post['content']);
//using dot
console.log(post.likes);
console.log(post.tags);
console.log(post.tags[0]);

//when using dot opretor we're not able use variable.
console.log(post.likes);
console.log(post.tags);
console.log(post.tags[0]);

//this is undefined
let prop = 'reposts';
console.log(post[prop]);
console.log(post.prop);

const post1 ={
   1: "a",
   2: 'b',
   null: 'c',
   true: 'd',
   undefined: 'e'
};
console.log(post1[1]);//here javascript 1st convert into a string
//console.log(post.1);//but here .dot opertor give the error beacause . not automatic to convert the to the string.

//-----------Add/Update Value---------
//upadte
student.city ='Bihar';
console.log(student.city);
//add
student.gender ='male';
console.log(student.gender);
/*-------------------||*/
student.marks =['A+','A','B+','A'];
console.log(student.marks[0]);
//remove the key word
delete student.gender;


/*-------Nested Object---------- 
Storing information of multiple students*/
//create
const classInfo={
   shahnawaz:{
      grade:'A+',
      city:'Saharsa'
   },
   shahil:{
      grade:'A+',
      city:'KushiNagar'
   },
   saif:{
      grade:'A+',
      city:'Siwan'
   }
};
//veiw
console.log(classInfo.shahnawaz);
console.log(classInfo.shahnawaz.city);


//add
classInfo.shahil.gender='male';
console.log(classInfo.shahil);
//Update
classInfo.shahnawaz.city='Gurgaon';
console.log(classInfo.shahnawaz.city);
//delete
delete classInfo.saif.city;
console.log(classInfo.saif);

/*-------------Array of Objects----------- */
const classInfo= [
   {
      name: 'shahnawaz',
      grade: 'A+',
      city: 'Saharsa',
   },
   {
      name: 'shahil',
      grade: 'A',
      city: 'Kushinagar',
   },
   {
      name: 'saif',
      grade: 'A',
      city: 'Siwan'
   }
];
console.log(classInfo[0]);
console.log(classInfo[0].name);
//same as using to add,update and delete


/*-------------Math Object-------------- */
//properties
console.log(Math.PI);
console.log(Math.E);
//Methods
console.log(Math.abs(-12));//passing +ve return +ve passing -ve return +ve 
console.log(Math.pow(4,2));
console.log(Math.floor(4.8));// roundoff value nearest smallest int vlaue
console.log(Math.ceil(4.4));//roundoff vlaue largest near
console.log(Math.random()); // return the value b/w 0 to 1. 

//Random Integers
// 100-range is depend upon on place value.
let num = Math.floor(Math.random()*100)+1;
console.log(num);
//gen 21 to 25
let num1 = Math.floor(Math.random()*5)+21;
console.log(num);