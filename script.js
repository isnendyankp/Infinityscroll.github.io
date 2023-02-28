// Unsplash API
const count = 30;
const apiKey = 'XwP-LD_cFG00n72puH-Y5VIOKao-c2TvkqSwXKsA3hQ';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		displayPhotos();
	} catch (error) {
		// Catch Error Here
	}
}

// On Load
getPhotos();
