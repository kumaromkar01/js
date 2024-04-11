// Exercise 1: Guess the number
// Prize Amount: Rs 500 Amazon voucher
let number = 0; // Generate random number here
let chances = 0;
// Keep asking for the number until the correct number is guessed
// Increment the chances variable
while(number != 50){
    let n = prompt("enter a number : -")
    number = parseInt(n);
    chances++;
}
alert("you took "+chances+"chances to guess ")


// Eventually after the game is over, display the (100 - Number of chances) and the actual number 