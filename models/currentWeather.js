let currentWeather = {
	temperature: Number,
	summary: String,
	windSpeed: Number,
	humidity: Number,
	cloudCover: Number,
	precipType: Number
};

function getCurrentWeather(currently) {
	for (const prop in currentWeather) {
		if (prop in currently) {
			currentWeather[prop] = currently[prop];
		}
	}
	return currentWeather;
}

module.exports = getCurrentWeather;
