/*DOM Events
Events are singnals that something has occurred (user inputs / actions) */
let btns = document.querySelectorAll("button");
// for (btn of btns) {
//   //onclick (when an element is clicked)
//   btn.onclick = sayhello;
//   //in onclick not support multiple function in one time.
//   btn.onclick = sayname;
//   //onmouseenter (when mouse enters an element)
//   btn.onmouseenter = () => console.log("you entered a button");
// }
function sayhello() {
  alert("Say Hello");
}
function sayname() {
  alert("Shahnawaz Akhtar");
}
/*Event Listener
element.addEventListener(event,callback) */
for (btn of btns) {
  //checked envet linstener in mdn
  //   btn.addEventListener("click", sayhello);
  //   btn.addEventListener("click", sayname);
  btn.addEventListener("dblclick", () => console.log("you doble clicked"));
}
/* */
/*Activity
after clicked a btn change color */
let btn1 = document.querySelector("#boxbtn");
btn1.addEventListener("click", changecolor);

function changecolor() {
  let random = getrandomcolor();
  let h1 = document.querySelector("h1");
  h1.innerText = random;
  let colordiv = document.querySelector(".colordiv");
  colordiv.style.backgroundColor = random;
}
function getrandomcolor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  return color;
}

//Event Listeners for Elements

let p = document.querySelector("p");
p.addEventListener("mouseenter", () => {
  let random = getrandomcolor();
  p.style.color = random;
});

/*this in Event Listeners
When 'this' is used in a callback of event handler of something,it refers to that something.*/

let text = document.querySelector(".text");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
function change() {
  console.dir(this.innerText);
  let random = getrandomcolor();
  this.style.color = random;
}
text.addEventListener("click", change);
h2.addEventListener("click", change);
h3.addEventListener("click", change);

/*Keyboard Events */
let btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", function (e) {
  console.log(e);
  console.log("Button 5 is clicked!!");
});
let inp = document.querySelector("input");
//go to anthor event to mdn docs
inp.addEventListener("keydown", function (e) {
  console.log(e);
  console.log("Key: " + e.key);
  console.log("Key: " + e.code);
  console.log("key was press");
});

/*Form Events */
let from = document.querySelector("form");
from.addEventListener("submit", function (e) {
  //stop to rediction of default url
  e.preventDefault();
  console.dir(this);
  /*EXtracting From Data */

  // let user = document.querySelector('#user');
  let user = this.elements[0]; // from.elements[0]
  // let pass = document.querySelector('#pass');
  let pass = this.elements[1];

  console.log(user.value);
  console.log(pass.value);
  alert(`Hii! ${user.value}, your password is set to : ${pass.value}`);
});

/*More Events
change event : The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements)
*/
let user = document.querySelector("#user");
//type username and clcik outside any element change is reflect
user.addEventListener("change", function () {
  console.log("change event");
  console.log("final value ", this.value);
});
// input event : The input event fires when the value of an <input>,<select>, or <textarea> element has been changed
//input is not trigger to non-charter key like: arrow and tab, enter,shift .etc
user.addEventListener("input", function () {
  console.log("input event");
  console.log("final value ", this.value);
});
/*Event bubbling */
let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener("click",function(){
  console.log('div was clicked');
});
//avoid event bublling
ul.addEventListener("click",function(e){
  //using this
  e.stopPropagation();
  console.log('ul was clicked');
});

for(li of lis){
  li.addEventListener("click",function(e){
    e.stopPropagation();
    console.log('li was clicked');
  })
}