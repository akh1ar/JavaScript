//create a tabbed interface where clicking on tabs display different cont sections without page reload.
let divs = document.querySelectorAll('.tabs');
let texts = document.querySelectorAll('h3');
texts[0].style.display="block";
texts[0].style.width="50%";

divs.forEach(function(div , idx){
    div.addEventListener('click',function(){
        hideText();
        texts[idx].style.display="block";
        texts[idx].style.width="50%";
    });
});
function hideText(){
    texts.forEach(function(text){
        text.style.display ="none";
    });
}
