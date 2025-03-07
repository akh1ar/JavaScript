/*Axios
Library to make HTTP requests*/

let url = "https://catfact.ninja/fact";
let url2 ="https://dog.ceo/api/breeds/image/random";

async function getData() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    return "no fact found!!";
  }
}

async function getData1() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    return "no img found!!";
  }
}

let btn = document.querySelector("button");
btn.addEventListener('click',async()=>{
  let fact = await getData();
  document.querySelector('#result').textContent= fact;
});
let btn2 = document.querySelector("#dog");
btn2.addEventListener('click',async()=>{
  let img = await getData1();
  document.querySelector('img').setAttribute("src",img);
});

/*Axios
sending Headers*/

let url3 = "https://icanhazdadjoke.com";
async function getJoke() {
  try {
    let config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url3,config);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}
