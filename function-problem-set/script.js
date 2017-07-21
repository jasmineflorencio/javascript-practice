function isEven(number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}
// shortcut solution
// function isEven(number) {
// 	return number % 2 === 0;
// }
// isEven(4); //true
// isEven(21); //false
// isEven(68); //true
// isEven(333); //false

function factorial(number) {
	var factorialSum = 1;
	for (var i = 2; i <= number; i++) {
		factorialSum *= i;
	}
	return factorialSum;
}
// factorial(5); //120
// factorial(2); //2
// factorial(10); //3628800
// factorial(0); //1

function kebabToSnake(str) {
	var snakeStr = str.replace(/-/g, "_");
	return snakeStr;
}
// kebabToSnake("hello-word"); //"hello_world"
// kebabToSnake("dogs-are-awesome"); //"dogs_are_awesome"
// kebabToSnake("blah"); //"blah"