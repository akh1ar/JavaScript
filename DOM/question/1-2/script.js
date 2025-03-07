// Create an HTML page with a button. When  the button is clicked, change the text of a paragraph element.
let btn = document.querySelector('button');
let p = document.querySelector('p');
let arrow = document.querySelectorAll('i');
let img = document.querySelectorAll('img');

//create a page with two images and a button. when the button is clicked, swap the source attribute of the images.

btn.addEventListener('click',function(){
    p.textContent ='Images are swap succefully';

    this.style.backgroundColor="green";

    let copyarrow = arrow[0].style.color;
    arrow[0].style.color = arrow[1].style.color;
    arrow[1].style.color = copyarrow;

    let imgsrc = img[0].src;
    img[0].src = img[1].src;
    img[1].src = imgsrc;
});

//create a from with input fields and a submit button.USe JavaScript to validate the from and display an error message if the input is invalid