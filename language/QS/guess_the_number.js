/*Guessing Game
User enters a max number & then to guess a random genrated number b/w 1 to max. */
let max = prompt('Enter the maxium number: ');
let random = Math.floor((Math.random()*max)+1);
let guess = prompt('Guess the number');
while(true){
   if(guess=='quit'){
      console.log('User Quiting the Game!!');
      break;
   }

   if(guess==random){
      console.log("you are right! congrats!! random number was : "+random);
      break;
   }else if(guess<random){
      guess = prompt("hint: Your guess too small. plz try again.");
   }
   else{
      guess = prompt('hint: Your guess was too large plz try again.');
   }
}