import React from 'react'

const WeatherCard = ({data}) => {
     const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  return (
     <div className="weather-card glass">
            <div className="city-name">
                <h2>{data.name}, {data.sys.country}</h2>
            </div>

            <div className="weather-main">
                <img src={iconUrl} alt={data.weather[0].description} />
                <h1>{Math.round(data.main.temp)}°C</h1>
            </div>

            <p className="description">{data.weather[0].description}</p>
            <p className="feels-like">Feels like {Math.round(data.main.feels_like)}°C</p>
        </div>
  )
}

export default WeatherCard
