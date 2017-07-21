function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

function isUniform(array) {
	var firstElement = array[0];
	for (var i = 1; i < array.length; i++) {
		if (firstElement !== array[i]) {
			return false;
		}
	}

	return true;
}

function sumArray(array) {
	var result = 0;
	array.forEach(function(number){
		result += number
	});

	return result;
}

function max(array) {
	var maxNumber = array[0];
	array.forEach(function(number){
		if (number > maxNumber) {
			maxNumber = number;
		}
	});

	return maxNumber;
}