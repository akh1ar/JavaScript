//Write a funtions that prints "hello world" 5 times at intervals of 2s each.
let id = setInterval(() => {
    console.log("Hello World");
  }, 2000);
  
  setTimeout(() => {
    clearInterval(id);
    console.log('clear interval run');
  }, 10000);
  