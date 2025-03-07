/*Create a new input and button element on the page using JavaScript only.Set the text of button to "Click me" */
let btn = document.createElement('button');
btn.innerText="Click me";
let input = document.createElement('input');
document.querySelector("body").append(input);
document.querySelector("body").append(btn);

/* Add following attributes to the element :
Change placeholder value of input to "username"
Change the id of button to "btn' */
btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");

/* Access the btn using the querySelector and button id. Change the button background 
color to blue and text color to white.*/
let btn1 = document.querySelector("#btn");
btn1.classList.add('btnstyle');

/*Create an hl element on the page and set its text to "DOM Practice" underlined. 
Change its color to purple.*/
let h1 = document.createElement('h1');
h1.innerText="DOM Practice";
document.querySelector("body").append(h1);
h1.classList.add('dom');

/* Create a p tag on the page and set its text to "Apna College Delta Practice",
where Delta is bold */

let p2 = document.createElement('p');
p2.innerHTML = "Shahnawaz <b>AKhtar</b>";
document.querySelector("body").append(p2);