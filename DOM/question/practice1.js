/*Add the following elements to the container using only JavaScript and the DOM methods */
//1. a <p> with red text that says "Hey i'm red!"
let p = document.createElement('p');
p.innerText="Hey i'm red!";
document.querySelector('body').append(p);
p.classList.add('red');
//2.an <h3> with blue text that says "I'm a blue h3!"
let h3 = document.createElement('h3');
h3.innerText="I'm a blue h3!";
document.querySelector('body').append(h3);
h3.classList.add('blue');
/* a <div> with a black boder and pink background color with the following elements inside of it:
  . another <h1> that says "i'm in a div"
  .a <p> that says "MEE TOO!"
*/
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');
h1.innerText = "i'm in a div";
p2.innerText = "MEE TOO!";

div.append(h1);
div.append(p2);

div.classList.add('box');
document.querySelector('body').append(div);