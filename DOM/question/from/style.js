let con = document.querySelector(".container");
con.addEventListener("mouseout", function () {
  this.classList.add("radiuschange"); //to add new classes
});
/*Create an input element on the page with a placeholder ”enter your name” and an
H2 heading on the page inside HTML.
The purpose of this input element is to enter a user’s name so it should only input
letters from a-z, A-Z and space (all other characters should not be detected).
Whenever the user inputs their name, their input should be dynamically visible inside
the heading.
[Please note that no other character apart from the allowed characters should be visible in the heading] */
let h1 = document.createElement("h1");
h1.innerText = "One Tools For Doing it All Together";
let inp = document.createElement("input");
inp.setAttribute("placeholder", "Enter your name");
let para = document.querySelector("p");
para.insertAdjacentElement("beforebegin", h1);
para.insertAdjacentElement("beforebegin", inp);

inp.addEventListener("input", function () {
    let input = this.value;
    let filteredInput = input.replace(/[^a-zA-Z\s]/g,"");
    this.value = filteredInput;
    h1.innerText = filteredInput;
});

/* Create a button on the page using JavaScript. Add an event listener to the button
that changes the button’s color to green when it is clicked.*/ 
let button = document.createElement('button');
button.innerHTML ='<b>How it Works</b>';
let btn = document.querySelector('.btn');
btn.append(button);
let buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
button.addEventListener('click',function(){
  this.classList.add('colorchange');
})
});