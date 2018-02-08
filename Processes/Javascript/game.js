//create secretNumber
var secretNumber = 4;
//ask for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//check if guess is right
if(guess === secretNumber) {
	alert("You got it!");
}
//otherwise, check if higher
else if(guess > secretNumber) {
	alert("Too high");
}
//otherswsie check if lower
else {
	alert("Too low");
}