//Improved to call back HELL to We write the Promises
// Setting up for Promises
function saveDb(data, sucess, failure) {
    let internetSpeed = Math.ceil(Math.random() * 10);
    if (internetSpeed > 4) {
      sucess();
    } else {
      failure();
    }
  }
  saveDb(
    "Shahnawaz",
    () => {
      console.log(" sucess1: your Data was Saved:");
      saveDb(
        "Shahil",
        () => {
          console.log(" sucess2: Data 2 is saved");
          saveDb(
            "saif",
            () => {
              console.log(" sucess3: Data 3 is saved");
            },
            () => {
              console.log("failure3: week connection data 3 not saved");
            }
          );
        },
        () => {
          console.log("failure2: week connection data 2 not saved");
        }
      );
    },
    () => {
      console.log(" failure1: Week Connection data not saved");
    }
  );
  
  console.log("\n.................Promises..............\n");
  
  /*Promises
  The Promises object represents the eventual completion (or failure) of an asynchronous operation and its reuslting value.*/
  //Refactoring with Promises
  function savetoDb(data) {
    return new Promise((resolve, reject) => {
      let internetSpeed = Math.ceil(Math.random() * 10);
      if (internetSpeed > 4) {
        resolve("sucess: data was Saved");
      } else {
        reject("failure: week connection");
      }
    });
  }
  //then( ) and catch( ) methods
  
  savetoDb("Shahnawaz")
  //promies are rejected and resolved with some data(valid results or errors)
    .then((result) => {
      console.log("data1 saved");
      console.log(result);
      // Promise chaining
      return savetoDb("Shahil");
    })
    .then((result) => {
      console.log("data2 saved");
      console.log(result);
      return savetoDb("Saif");
    })
    .then((result) => {
      console.log("data3 saved");
      console.log(result);
    })
    .catch((error) => {
      console.log("Promise was Rejected");
      console.log(error);
    });
  
  // console.log("\n.................Color Change QS..............\n");
  //QS
  let h1 = document.querySelector('h1');
  
  function changeColor(color,dealy){
      return new Promise((resolve, reject) => {
          setTimeout(()=>{
              h1.style.color=color;
              resolve("color changed!");
          },dealy)
      });
  }
  changeColor('red',1000)
  .then(()=>{
      console.log('red color was completed');
      return changeColor('green',1000);
  }).then(()=>{
      console.log('green color was completed');
      return changeColor('blue',1000);
  }).then(()=>{
      console.log('blue color was completed');
      return changeColor('yellow',1000);
  }).then(()=>{
      console.log('yellow color was completed');
  });