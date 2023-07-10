const randomRestaurantButton = document.getElementById('randomRestaurantButton');

function getRandomRestaurant() {
	const restaurants = ['Saltoro', "Ivar's Seafood Bar", 'Xiaolongbao House', "Spiro's Pizza & Pasta"];
	const randomIndex = Math.floor(Math.random() * restaurants.length);
	const randomRestaurant = restaurants[randomIndex];
	alert("Random Restaurant Recommendation: " + randomRestaurant);
}

randomRestaurantButton.addEventListener('click', getRandomRestaurant);
