//create a funcions to roll a dice & always display the value of the dice 1 to 6.

function rolldice() {
    let rand = Math.ceil(Math.random() * 6);
    console.log(rand);
}
rolldice();