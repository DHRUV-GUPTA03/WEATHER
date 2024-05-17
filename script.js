document.getElementById('searchButton').addEventListener('click', function() {
    var city = document.getElementById('searchInput').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    var apiKey = '0ca2f1634babde14aa7fab0f1d44df1a'; // Get your API key from a weather API provider
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
