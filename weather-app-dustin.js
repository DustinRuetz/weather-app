var weatherWidget = { };

// API key - f0432ee484e4f7d8
weatherWidget.apiURL = "http://api.wunderground.com/api/f0432ee484e4f7d8/conditions/q/CA/Sacramento.json";

// This code is used to initialize our application
weatherWidget.init = function() {
	// Call the 
	weatherWidget.ready();
};

// When the page loads, get some data
// Make an AJAX call to the Weather Underground API
weatherWidget.ready = function() {
	$.ajax({
		dataType: "json",
		method: "GET",
		url: weatherWidget.apiURL
	})
	// When it finishes loading...
	.then(function(getWeather) {
		weatherWidget.weatherImage = getWeather.current_observation.icon_url;
		weatherWidget.weatherString = getWeather.current_observation.weather;
		weatherWidget.temperature = getWeather.current_observation.temp_c;
		weatherWidget.city = getWeather.current_observation.display_location.city;
		weatherWidget.dateTime = getWeather.current_observation.observation_time;
		// When the data returns, display specific information on the HTML document
		$(".weather_image").attr("src", weatherWidget.weatherImage);
		$(".weather_string").text(weatherWidget.weatherString);
		$(".temp_c").text(weatherWidget.temperature);
		$(".city_name").text(weatherWidget.city);
		$(".date_time").text(weatherWidget.dateTime);
	});
};
// The document-ready which calls the initialize method
$(document).ready(function(){
	weatherWidget.init();
});