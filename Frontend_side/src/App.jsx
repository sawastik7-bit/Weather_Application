import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherDetails from './components/WeatherDetails'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast'
import {getForecast,getWeather} from './api/weather'
const App = () => {

const [weather,setWeather]=useState(null);
const [forecast,setForecast]=useState(null);

const [error,setError]=useState('');
const [loading,setLoading]=useState(false);

const handleSearch=async(city)=>{
  setLoading(true);
  setError('');
  setWeather(null);
  setForecast(null);

  try {
    const [weatherData,forecastData]=await Promise.all([
      getWeather(city),
      getForecast(city)
    ]);


    setWeather(weatherData);
    setForecast(forecastData);
  }catch(error){
    setError(error.message);
  }finally{
    setLoading(false);
  }
}

  return (
    <div className="app">
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />

            {loading && <p className="loading">Fetching weather...</p>}
            {error && <p className="error">{error}</p>}

            {weather && (
                <>
                    <WeatherCard data={weather} />
                    <WeatherDetails data={weather} />
                </>
            )}

            {forecast && <Forecast data={forecast} />}
        </div>
    );
}

export default App
