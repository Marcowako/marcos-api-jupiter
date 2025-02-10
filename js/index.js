const apiKey = '1f3ecaf8ea73cb6baa1d8bb72777e45f'; // Replace with your OpenWeatherMap API key
const city = 'chapel hill';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const weatherDataDiv = document.getElementById('weather-data');
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        weatherDataDiv.innerHTML = `
            <p>Temperature: ${temperature}°F</p>
            <p>Condition: ${description}</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} mph</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
