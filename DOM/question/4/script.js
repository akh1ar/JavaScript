//crate a unordered list. Allow users to add and remove list items dynamically using buttons.
let addbtn = document.querySelector(".addBtn");
let input = document.querySelector("input");
let ul = document.querySelector("ul");


addbtn.addEventListener("click", function (e) {
  if (input.value == "") {
    alert("Empty Task is not allow!");
  } else {
    let tasklist = document.createElement("li");
    tasklist.textContent = input.value;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("delListbtn");

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("divlist");

    ul.appendChild(taskDiv);
    taskDiv.appendChild(tasklist);
    taskDiv.appendChild(removeBtn);
    input.value = "";
  }
});

//Event Delegation
ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
      let listitem = event.target.parentElement;
      listitem.remove();
    }
});