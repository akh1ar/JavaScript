/*Selecting Elements
getElementById
Returns the Elemets as an object or null(if not found)*/
let imgObj = document.getElementById("mainImg");
console.dir(imgObj);
//want to help of doc obj to manumple the html
// imgObj.src = "assets/one abvoe all.jpg";

/*Selecting Elements
getElementByClassName
Returns the Elements as an HTML Collection empty collection (if not found*/
let  images = document.getElementsByClassName("oldImg");

for(let i=0;i<images.length;i++){
    images[i].src="./assets/one abvoe all.jpg";
    console.log(`img ${i} has changed successfully...`);
}

/*Selecting Elements
getElementBYTagName
Return the Elements an an HTML Collection or empty collection ( if not found) */
let tag = document.getElementsByTagName("p");
console.log(tag);

/*Query Selectors
Allows us to use any CSS selector 
*/
console.dir(document.querySelector('h1'));//Selects first p elements
console.dir(document.querySelector('#description'));//Selects first element with id = myId
console.dir(document.querySelector('.oldImg'));//Selects first elements with class = myclass
console.dir(document.querySelector('div a'));//Selects first child of div in achor

console.dir(document.querySelectorAll('p'));//selcts all p elements

/* Using Properties & Methods */
let para = document.querySelector('p');
console.dir(para.innerText);//innerText: Show the visible text contained in a node(show like scrren text)
console.dir(para.textContent);//textContent: Shows all the full text(actul html file text content show)
console.dir(para.innerHTML);//innerHTML:  Shows the full markup

let sec = document.querySelector('h2');
sec.innerHTML = `<u> ${sec.innerText} </u>`;

/*Manipulating Attributes
obj.getAttribute(attr)
obj.setAttribute(attr,val)*/

let img = document.querySelector('#mainImg');
console.log(img.getAttribute('id'));
// console.log(img.setAttribute('id','spider'));
//change to source att
img.setAttribute('src','./assets/portrait_uncanny.jpg');
console.log(img.getAttribute('class'));
// img.setAttribute('class','spider');


/*Manipulating Style 
style Property :obj.style*/
//these all style are set in inline style not a css file
//style mainpulation only give the acess of inline css not the css extrnal file.
console.dir(img.style);
sec.style.color='crimson';
sec.style.backgroundColor='black';

let links = document.querySelectorAll('.box a');
for(link of links){
    link.style.color='green';
}
/*classList Property */
console.log(img.classList);
//there heading has no any class
let heading = document.querySelector('h1');
console.log(heading.classList);//to show the list
heading.classList.add('green');//to add new classes
heading.classList.add('under');//to add new classes
console.log(heading.classList.contains('green')); // return boolean value if present so true.
heading.classList.remove('under');//to remove classes
heading.classList.toggle('under')//to toggle between add & remove(if exsits then remove and not-exsits then add).
let box = document.querySelector('.box');
box.classList.add('yellowBg');

/*Navigation
parentElement
children
previousElementSibling / nextElementSibling */
let h4 = document.querySelector('h4');
console.log(h4.parentElement);
console.log(h4.children);
console.log(box.children);
let ul = document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.children);
console.log(ul.children[1]);
console.log(ul.children[1].previousElementSibling);
console.log(ul.children[1].nextElementSibling);
//Manipulating
img.previousElementSibling.style.color='yellow';

/*Adding Elements
doucment.createElement('p') */

let newP = document.createElement('p');
console.dir(newP);
newP.innerText = "Hii i am a new Paragraph";
box.appendChild(newP);//insert element in end
let btn = document.createElement('button');
btn.innerText = "Click Me";
let body  = document.querySelector('body');
body.appendChild(btn);
newP.append(" this is new text",btn,"do not click this btn");

body.prepend(newP);//insert el in start
para.insertAdjacentElement('beforebegin',btn);//(postion,el) checkout mdn web docs

/*Removing Elements 
removeChild()
remove()*/
body.removeChild(btn);