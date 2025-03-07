//Display a progress bar that updates in real-time, showing the progress bar of downlaod, or form submission.
let pro = document.querySelector('#progress');
let count =0;
let int  =setInterval(function(){
    if(count === 100){
        clearInterval(int);
        document.querySelector('h3').style.opacity= 1;
    }
    count++;
    pro.style.width = count+'%'; 
},50);