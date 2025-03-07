//Bulid a countdown timer that starts when a button is clicked and update the display in real-time.
let btn = document.querySelectorAll('button');
let clear;
btn[0].addEventListener('click',function(){
    let count = 0;
     clear = setInterval(function(){
        document.querySelector('h3').innerText= count++;
    },1000);
});

btn[1].addEventListener('click',function(){
    clearInterval(clear);
});
//create a tabbed interface where clicking on tabs display different cont sections without page reload.
//Display a progress bar that updates in real-time, showing the progress bar of downlaod, or form submission.
