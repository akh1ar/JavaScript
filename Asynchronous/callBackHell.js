/*Callback Hell*/
let h1 = document.querySelector('h1');
function changecolor(color,delay,nextcolChange){
    setTimeout(()=>{
        h1.style.color= color;
        if(nextcolChange)nextcolChange();
    },delay);
}
changecolor('red',1000,()=>{
    changecolor('green',1000,()=>{
        changecolor('blue',1000,()=>{
            changecolor('orange',1000)
        });
    });
});