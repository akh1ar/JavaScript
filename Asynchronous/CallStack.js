//Call Stack
function hello(){
    console.log("inside hello funtion");
    console.log("hello");
}
function demo(){
    console.log("calling hello funtion");
    hello();
}
console.log('calling demo fn');
demo();
console.log("done ,by");

/*Visualizing the Call Stack*/
function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}
three();

/*Breakpoints
how to set breakpoints and visualizing the stack
1.open the sources and open js file set breakpoints to click the line
2.open debugger to refresh the page.
3.click step into next funtion call
*/

/*JS is Single Threaded Nature(synchrous Nature):
means in sigle time only work on single task*/

//but here how to wait and excution as same time.
//here is role of broswer because browser are written in c++/java this laung are support the multi-Threading
//here setTimeout waiting in broswer when time is complete the brower put the funtion in last of the stack in JS.
setTimeout( function (){
    console.log('Shahnawaz');
},2000);
setTimeout( function(){
    console.log('Akhtar');
},2000);
console.log('Welcome : ');

/*JavaScript's asynchronous Stared in Asynchronous */