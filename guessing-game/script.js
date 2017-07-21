var magicNumber = 7;
var guess = Number(prompt("Guess a number!"));

if (guess < magicNumber){
	alert("Too low. Try again.");
} else if (guess > magicNumber){
	alert("Too high. Try again.");
} else if (guess === magicNumber){
	alert("Yayyy you guessed the magic number!");
} else {
	alert("Uhh that doesn't seem right. Try again.");
}