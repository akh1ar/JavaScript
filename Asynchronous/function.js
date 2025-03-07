/* Async Functions
async & await keywords*/
//auto return promise
// async function greet() {
//   throw "week connection";
//   return "hello";
// }
// greet()
//   .then((result) => {
//     console.log("promise resolved");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("promise rejected with",err);
//   });

/*Await Keyword
pauses the execution of its surrounding async funtion until the promise is settled (resolved or rejected) */

function getNum(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num = Math.ceil(Math.random()*10);
            console.log(num);
            resolve();
        },1000);
    });
}
//await funtion only use in async
async function demo1() {
    await getNum();
    await getNum();
    await getNum();
}

//QS
let h1 = document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let nums = Math.floor(Math.random()*10)+1;
            if(nums>3){
                reject("promise rejcted");
            }
            h1.style.color=color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        },delay);
    });
}
async function demo() {

    try{
        await changeColor("red",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
        await changeColor("yellow",1000);
    }catch(err){
        console.log("err cought")
        console.log(err);
    }
    //Handing Rejections with await
    let  a =5;
    console.log(a);
    console.log("new number =",a+3);
}