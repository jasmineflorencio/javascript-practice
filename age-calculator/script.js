var age = prompt("How old are you?");
var days = age * 365.25;
alert(age + " years is roughly " + days + " days");

// Additional Exercise


if (age < 0){
	console.log("Invalid age");
} else if (age < 18){
	console.log("Too young");
} else if (age === 21) {
	console.log("Happy 21st birthday!!");
} else if (age < 21){
	console.log("You can enter but cannot drink");
} else if (age % 2 !== 0) {
	console.log("Your age is odd!");
} else {
	console.log("Come on in!");
}