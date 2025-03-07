//create a from with input fields and a submit button.USe JavaScript to validate the from and display an error message if the input is invalid
let form = document.querySelector('form');
let inp = document.querySelectorAll('input');
let h4 = document.querySelector("h4");

form.addEventListener("submit",function(e){
    //for after submit the from to stop the refresh
    e.preventDefault();
    if(inp[0].value.trim() === '' || inp[1].value.trim() ===''){
        h4.textContent='Some Feild are Blank';
        h4.style.color='red';
    }
    else{
        h4.textContent='';
    }
})
//crate a unordered list. Allow users to add and remove list items dynamically using buttons.
//Bulid a countdown timer that starts when a button is clicked and update the display in real-time.
//create a tabbed interface where clicking on tabs display different cont sections without page reload.
//Display a progress bar that updates in real-time, showing the progress bar of downlaod, or form submission.