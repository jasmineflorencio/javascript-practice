var count = -10;
console.log("Problem 1");
while(count < 20) {
	console.log(count);
	count++;
}

var count = 10;
console.log("Problem 2");
while(count <= 40) {
	console.log(count);
	count+= 2;
}

var count = 300;
console.log("Problem 3");
while(count <= 333) {
	if(count % 2 !== 0) {
		console.log(count);
	}
	count++;
}

var count = 5;
console.log("Problem 4");
while(count <= 50) {
	if(count % 15 === 0) {
		console.log(count);
	}
	count++;
}