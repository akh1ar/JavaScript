let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

async function getCol(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    return "error : -" + e;
  }
}

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  let collArr = await getCol(country);
  Show(collArr);
});

function Show(collArr){
  let list = document.querySelector('#list');
  list.innerText="";
  for(col of collArr){
    let li = document.createElement('li');
    li.innerText = col.name;
    list.appendChild(li);
  }
}
