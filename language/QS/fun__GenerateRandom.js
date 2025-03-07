/*Write a JavaScript function to generate a random number within a range 
(start, end). */

function generateRandom(st,end){
    let diff = end - st;
    return Math.floor(Math.random()*diff)+st;
}

let start=100,end=200;

console.log(generateRandom(start,end));