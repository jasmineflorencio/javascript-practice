var movies = [
{
	title: "My Neighbor Totoro",
	rating: 8.2,
	hasWatched: true
},
{
	title: "Kiki's Delivery Service",
	rating: 7.9,
	hasWatched: false
},
{
	title: "Castle in the Sky",
	rating: 8.1,
	hasWatched: false
},
{
	title: "Spirited Away",
	rating: 8.9,
	hasWatched: true
},
{
	title: "Princess Mononoke",
	rating: 8.4,
	hasWatched: true
}
];

// movies.forEach(function(movie){
// 	if (movie.hasWatched === true) {
// 		console.log("You have watched " + movie.title + " - " + movie.rating + " stars");
// 	} else {
// 		console.log("You have not watched " + movie.title + " - " + movie.rating + " stars");
// 	}
// })

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not watched ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
});