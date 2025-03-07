/*API: Application Programming Interface */
/*JSON : JavaScript Object Notation www.json.org */
/*JSON: Accessing Data from JSON

JSON.stringify(json) Method
To parse a JS object data into JSON*/
let jsonRes =
  '{"fact":"If they have ample water, cats can tolerate temperatures up to 133 \u00b0F.","length":70}';
/*JSON>parse(data) Method
To parse a string data into a JS object */
let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

/*Testing API requests
tool
.Hoppscoth API: https://dog.ceo/api/breeds/image/random
.Postman */
/*Ajax
Asynchronous JavaScript and XML
Whenever your users interact with a web application, such as when they click buttons or checkmark boxes, the browser exchanges data with the remote server.*/

/*HTTP verbs
GET : when get the information form the api
POST : when send the data in into server
DELETE : when delete the data in server*/

/*Status Codes
e.g:
200-OK
404-Not Found
400-Bad Request
500-Internal Server Error*/

/*Add Information in URLs 
query String
https://www.google.com/search?q=marvel

?name=shahnawaz&marks=95

when we want to pass the additional information in api so after ? sine we add the information

http://universities.hipolabs.com/search?name=Nigeria&state=Delhi
in query string pair we will send unnessary data  api will not recozine the data api simple ingore the data*/

/*Http headers (header,value)
https://icanhazdadjoke.com/api
*/

/*API request
using fetch*/
let url = "https://catfact.ninja/fact";
//fetch funtion return the promise
fetch(url)
  .then((res) => {
    console.log("Not a readable format: ",res);
    //make a readable fromat to a data.
    return res.json(); //this also return promise
  })
  .then((data) => {
    console.log("THis is readble fomrat",data);
    return fetch(url);
  }).then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data.fact);
  })
  .catch((err) => {
    console.log("ERROR -", err);
  });

  /*Using fetch with async and await */
async function getFacts(){
  try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  }catch(e){
    console.log(e);
  }
  console.log('Bye!');
}