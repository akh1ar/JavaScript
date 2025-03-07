/* Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States. */

let student ={
    stu1:{
       name:'Shahnawaz',
       age: 21,
       city:'Bihar'
    },
    stu2:{
       name: 'shahil',
       age: 22,
       city: 'KushiNagar'
    },
    stu3:{
       name: 'saif',
       age: 23,
       city: 'Siwan'
    },
    stu4:{
       name: 'irfan',
       age: 24,
       city: 'faridabad'
    }
 }
 
 console.log(student);
 
 //Edit their city’s
 
 student.stu1.city='New York';
 console.log(student.stu1);
 
 //add new propety:
 student.stu1.country='United States';
 console.log(student.stu1);