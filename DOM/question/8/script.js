/*Create a search bar that display live search results as user type, updating the results without requiring a full page reload */
let input = document.querySelector("input");
let data = [
  {
    name: "Shahnawaz",
    src: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shahil",
    src: "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Saif",
    src: "https://plus.unsplash.com/premium_photo-1664876514376-e684971ec8d3?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Irfan",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

input.addEventListener("input", function () {
  let match = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });
  let person = "";
  match.forEach(function (e) {
    person += `<div id="person">
          <div class="img">
            <img src="${e.src}" alt="">
          </div>
          <h4>${e.name}</h4>
        </div>`;
  });
  document.querySelector("#people").innerHTML = person;
});
