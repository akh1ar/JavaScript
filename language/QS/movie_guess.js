const favmovie = "Avatar";
let guess =prompt("Guess the Movie: ");
while((guess!=favmovie) && (guess!='quit') ){
   guess = prompt("Worng guess. please try again: ");
}
if(guess==favmovie){
   alert("congrats you're WIN!!");
} else{
    alert("You QUIT the Game!!");
}