// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});

const details ={
    name:"Goku",
    age: 30,
    universe: 7,
    forms: ['SS','SS4','MUI','Kaioken'],
    city: 'Osaka'
};
const credentials= {
    username: 'goku@Ultra-Instinct.com',
    passowrd: 'Kakarot',
};

console.log(mergeObjects({}=details,{}=credentials));
