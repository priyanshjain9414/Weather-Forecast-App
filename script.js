document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const response = await fetch(`/api/weather?city=${city}`);
    
    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        const error = await response.json();
        document.getElementById('weatherInfo').innerText = error.message;
    }
});

function displayWeather(data) {
    const weatherInfo = `
        <h2>Weather in ${data.location.name}</h2>
        <h3>Region : ${data.location.region}</h3>
        <h3>Country : ${data.location.country}</h3>
        <p>Temperature: ${data.current.temp_c} °C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current.humidity}%</p>
        <p>Wind Speed: ${data.current.wind_kph} km/h</p>
        <p>Wind Direction: ${data.current.wind_dir}</p>
    `;
    document.getElementById('weatherInfo').innerHTML = weatherInfo;
}
