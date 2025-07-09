import React from 'react';

function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>🌡 Temperature: {main.temp} °C</p>
      <p>🌥 Condition: {weather[0].description}</p>
      <p>💨 Wind Speed: {wind.speed} m/s</p>
      <p>💧 Humidity: {main.humidity}%</p>
    </div>
  );
}

export default WeatherCard;
